import React from 'react';
import PriceFormat from './priceFormat';
export default class ProductDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = { product: null };

  }

  componentDidMount() {
    fetch(`/api/products/${this.props.params.productId}`)
      .then(res => res.json())
      .then(product => {
        this.setState({
          product: product
        });
      })
      .catch(err => console.error(err));
  }

  render() {
    if (!this.state.product) return null;

    return (
      <div className="row justify-content-center details-card" >
        <div className="col-11 d-flex flex-wrap border p-4">
          <div className="col-10 back" onClick={() => this.props.setView('catalog', {})}>Back to catalog</div>
          <img src={this.state.product.image} alt={this.state.product.name} className="col-4 mb-3 img-detail"/>
          <div className="col-8">
            <h5>{this.state.product.name}</h5>
            <p className="text-muted"><strong>{PriceFormat(this.state.product.price)}</strong></p>
            <h6>{this.state.product.shortDescription}</h6>
            <button className='btn btn-primary'onClick={() => this.props.addToCart(this.state.product)}>Add to Cart</button>
          </div>
          <div className="col-11">
            <div>{this.state.product.longDescription}</div>
          </div>
        </div>
      </div>
    );
  }
}
