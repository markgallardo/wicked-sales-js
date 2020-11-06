import React from 'react';
import CartSummaryItem from './cart-summary-item';

export default function CartSummary(props) {

  return (
    <>
      <div className="back" onClick={() => props.setView('catalog', {})}>Back to catalog</div>
      <h1 className="mb-3">My Cart</h1>
      {props.cart.length
        ? props.cart.map(item => <CartSummaryItem key={item.cartItemId} item={item}/>)
        : <h3>Your Cart is empty</h3>
      }
    </>
  );
}
