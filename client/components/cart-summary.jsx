import React from 'react';
import CartSummaryItem from './cart-summary-item';
import TotalPrice from './total-price';

export default function CartSummary(props) {

  return (
    <div className="container-fluid d-flex summary-container">
      <div className="row ">
        <div className="container details-card justify-content-center">
          <div className="back" onClick={() => props.setView('catalog', {})}>
            <i className="fas fa-chevron-left">Back to catalog</i>
          </div>
          <h1 className="mt-1">My Cart</h1>
          <div className="container ml-3 d-flex justify-content-between align-item-center">
            <h5>Total:{TotalPrice(props.cart)}</h5>
            <button onClick={() => props.setView('checkoutDisclaimer', {})} className="btn btn-primary ml-">Checkout</button>
          </div>
        </div>

        {props.cart.length
          ? props.cart.map(item => <CartSummaryItem key={item.cartItemId} item={item} />)
          : <h3 className="container details-card">Your Cart is empty</h3>
        }

      </div>
    </div>
  );
}
