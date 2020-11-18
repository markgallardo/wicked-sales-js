import React from 'react';
import CartSummaryItem from './cart-summary-item';
import TotalPrice from './total-price';

export default function CartSummary(props) {

  return (
    <div className="container details-card">
      <div className="row d-flex">
        <div className="back" onClick={() => props.setView('catalog', {})}>Back to catalog</div>
        <h1 className="mb-3">My Cart</h1>
        <div className="row ml-3 d-flex justify-content-between align-item-center">
          <h5>Total:{TotalPrice(props.cart)}</h5>
          <button onClick={() => props.setView('checkout', {})} className="btn btn-primary mr-5">Checkout</button>
        </div>
      </div>

      {props.cart.length
        ? props.cart.map(item => <CartSummaryItem key={item.cartItemId} item={item}/>)
        : <h3>Your Cart is empty</h3>
      }

    </div>
  );
}
