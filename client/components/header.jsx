import React from 'react';

export default function Header(props) {
  return (
    <header className="container-fluid mb-3 mt-3  justify-content-center">
      <div className="row m align-items-center justify-content-between">
        <h3 className=" mt-3 header-font cursor logo" onClick={() => { props.setView('catalog', {}); }}><img src="/images/dota2icon.svg" alt="" className="header-logo"/>The Secret Shop</h3>
        <div className="d-flex cursor" onClick={() => { props.setView('cart', {}); }}>
          <p className="text-light mb-0 mr-3">{props.cartItemCount} Items <i className="fas fa-shopping-cart text-light"></i></p>
        </div>
      </div>
    </header>
  );
}
