import React from 'react';

export default function Header(props) {
  return (
    <header className="container align-items-center mb-3 mt-3  justify-content-between">
      <h2 className="ml-3 mb-0 header-font"><img src="/images/dota2icon.svg" alt="" className="header-logo"/>The Secret Shop</h2>
      <div className="row align-items-center justify-content-end mr-4" onClick={() => { props.setView('cart', {}); }}>
        <p className="text-light mb-0">{props.cartItemCount} Items <i className="fas fa-shopping-cart text-light"></i></p>
      </div>
    </header>
  );
}
