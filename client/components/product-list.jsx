import React from 'react';
import ProductListItem from './product-list-item';

export default class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
    this.getProducts = this.getProducts.bind(this);
    this.productList = this.productList.bind(this);
  }

  getProducts() {
    fetch('/api/products')
      .then(res => res.json())
      .then(results => this.setState({ products: results }))
      .catch(err => console.error(err));
  }

  componentDidMount() {
    this.getProducts();
  }

  productList() {
    const list = this.state.products.map(products => <ProductListItem key={products.productId} products={products} />);
    return (
      <>
        { list }
      </>
    );
  }

  render() {
    return (
      <div className="card-deck">
        {this.productList()}
      </div>
    );
  }
}
