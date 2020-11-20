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
      <div className="container align-content-center justify-content-center details-card">
        <div className="d-flex justify-content-center col-md-11 border p-4">
          <img src={this.props.item.image} alt={this.props.item.name} className="img-detail "/>
          <div className="card-body">
            <h5 >{this.props.item.name}</h5>
            <p className=" text-muted"><strong>{PriceFormat(this.props.item.price)}</strong></p>
            <p className="">{this.props.item.shortDescription}</p>
          </div>
        </div>
      </div>

    );
  }
}
