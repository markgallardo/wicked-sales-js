import React from 'react';
import PriceFormat from './priceFormat';

export default function CartSummartItem(props) {
  function removeItemClick() {
    props.removeItem(props.item.cartItemId);
  }
  return (
    <div className="card details-card mb-2">
      <div className="row align-content-center justify-content-center ">
        <div className="col-md-4">
          <img className="card-img-top" src={props.item.image} alt={props.item.name}/>
        </div>
        <div className="col-md-5">
          <div className="card-body">
            <h5 className="card-body">{props.item.name}</h5>
            <p className=" text-muted card-subtitle"><strong>{PriceFormat(props.item.price)}</strong></p>
            <p className="card-text">{props.item.shortDescription}</p>
          </div>
        </div>
        <div className="mt-5">
          <button className=" btn btn-danger mb-2" onClick={removeItemClick}>remove</button>
        </div>
      </div>
    </div>

  );
}
