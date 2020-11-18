import React from 'react';
import PriceFormat from './priceFormat';

export default class CartSummaryItem extends React.Component {
  constructor(props) {
    super(props);
    this.removeItemClick = this.removeItemClick.bind(this);
  }

  removeItemClick() {
    const cartItemId = this.props.item.cartItemId;
    const requestOption = {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' }
    };
    fetch(`/api/cart/${cartItemId}`, requestOption)
      .then()
      .then(data => {
        this.props.updatedCart();
      })
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div className="row mb-3 justify-content-center details-card">
        <div className="d-flex flex-wrap col-11 border p-4">
          <img src={this.props.item.image} alt={this.props.item.name} className="img-detail col-4 mb-3"/>
          <div className="col-8 mt-5">
            <h5 >{this.props.item.name}</h5>
            <p className=" text-muted"><strong>{PriceFormat(this.props.item.price)}</strong></p>
            <p className="">{this.props.item.shortDescription}</p>
            <button onClick={this.removeItemClick}>Remove to cart</button>
          </div>
        </div>
      </div>

    );
  }
}
