import React from 'react';
import CartSummaryItem from './cart-summary-item';
import TotalPrice from './total-price';

export default function CartSummary(props) {

  function checkOutBtn() {
    if (props.cart.length) {
      return (
        <div>
          <button onClick={() => props.setView('checkoutDisclaimer', {})} className="btn btn-primary ml-1 mb-2">Checkout</button>
        </div>
      );
    }
  }

  return (
    <div className="container-fluid d-flex ">
      <div className="container ">
        <div className="container details-card justify-content-center">
          <div className="cursor" onClick={() => props.setView('catalog', {})}>
            <i className="fas fa-chevron-left">Back to catalog</i>
          </div>
          <h1 className="mt-1">My Cart</h1>
          <div className="container ml-3 d-flex justify-content-between align-item-center">
            <h5>Total:{TotalPrice(props.cart)}</h5>
            {checkOutBtn()}
          </div>
        </div>
        <div className="container details-card">
          {props.cart.length
            ? props.cart.map(item => <CartSummaryItem key={item.cartItemId} item={item} removeItem={props.removeItem}/>)
            : <h3 className="container pb-3 details-card">Your Cart is empty</h3>
          }
        </div>

      </div>
    </div>
  );
}
