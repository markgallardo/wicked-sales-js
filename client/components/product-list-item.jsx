import React from 'react';

export default function ProductListItem(props) {
  const productPrice = props.products.price;
  const prices = productPrice.toString().split('');
  prices.splice((prices.length - 2), 0, '.');
  const decimalPrice = prices.join('');

  return (
    <div className="card mb-5">
      <img src={props.products.image} alt={props.products.name} className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">{props.products.name}</h5>
        <p className="cardtext text-muted">${decimalPrice}</p>
        <p className="cardtext">{props.products.shortDescription}</p>
      </div>
    </div>
  );
}
