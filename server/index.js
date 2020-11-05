require('dotenv/config');
const express = require('express');

const db = require('./database');
const ClientError = require('./client-error');
const staticMiddleware = require('./static-middleware');
const sessionMiddleware = require('./session-middleware');

const app = express();

app.use(staticMiddleware);
app.use(sessionMiddleware);

app.use(express.json());

app.get('/api/health-check', (req, res, next) => {

  db.query('select \'successfully connected\' as "message"')
    .then(result => res.json(result.rows[0]))
    .catch(err => next(err));
});

app.get('/api/products', (req, res, next) => {
  const select = `
      select *
      from products
  `;
  db.query(select)
    .then(result => res.json(result.rows))
    .catch(err => next(err));
});

app.get('/api/products/:productId', (req, res, next) => {
  const productId = req.params.productId;
  const select = `
  select *
  from "products"
  where "productId" = $1
  `;
  db.query(select, [productId])
    .then(result => {
      if (result.rows[0]) {
        res.status(200).json(result.rows[0]);
      } else {
        next(new ClientError(`cannot find productId of ${productId}`, 404));
      }
    });
});

app.get('/api/cart', (req, res, next) => {
  if (!req.session.cartId) return res.json([]);
  const select = `
          select "c"."cartItemId",
          "c"."price",
          "p"."productId",
          "p"."image",
          "p"."name",
          "p"."shortDescription"
        from "cartItems" as "c"
       join "products" as "p" using ("productId")
       where "c"."cartId" = $1
  `;
  db.query(select, [req.session.cartId])
    .then(result => res.json(result.rows))
    .catch(err => {
      console.error(err);
      next(err);
    });
});

app.post('/api/cart', (req, res, next) => {
  const productId = parseInt(req.body.productId, 10);
  if (!productId || productId <= 0) {
    return next(new ClientError('ProductId must be a positive interger', 400));
  }
  const select = `
        select "price"
        from "products"
        where "productId" =$1
  `;
  db.query(select, [productId])
    .then(result => {
      if (!result.rows[0]) throw new ClientError('ProductId does not exist', 404);
      const price = result.rows[0].price;
      const insert = `
          insert into "carts" ("cartId", "createdAt")
          values (default, default)
          returning "cartId"
    `;
      if (req.session.cartId) {
        return { cartId: req.session.cartId, price: price };
      } else {
        return (
          db.query(insert)
            .then(result => {
              const cartId = result.rows[0].cartId;
              const object = {
                cartId: cartId,
                price: price
              };
              return object;
            })
        );
      }
    })
    .then(result => {
      req.session.cartId = result.cartId;
      const insert = `
              insert into "cartItems" ("cartId", "productId", "price")
              values ($1, $2, $3)
              returning "cartItemId"
          `;
      const values = [result.cartId, productId, result.price];
      return (
        db.query(insert, values)
          .then(result => result.rows[0])
      );
    })

    .then(result => {
      const select = `
          select "c"."cartItemId",
            "c"."price",
            "p"."productId",
            "p"."image",
            "p"."name",
            "p"."shortDescription"
        from "cartItems" as "c"
        join "products" as "p" using ("productId")
      where "c"."cartItemId" = $1
      `;
      db.query(select, [result.cartItemId])
        .then(result => {
          return res.status(201).json(result.rows[0]);
        });
    })
    .catch(err => {
      console.error(err);
      next(err);
    });

});

app.use('/api', (req, res, next) => {
  next(new ClientError(`cannot ${req.method} ${req.originalUrl}`, 404));
});

app.use((err, req, res, next) => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    console.error(err);
    res.status(500).json({
      error: 'an unexpected error occurred'
    });
  }
});

app.listen(process.env.PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port', process.env.PORT);
});
