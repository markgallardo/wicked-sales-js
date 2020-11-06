import React from 'react';
import PriceFormat from './priceFormat';

export default function CartSummaryItem(props) {
  return (
    <div className="row mb-3 justify-content-center">
      <div className="d-flex flex-wrap col-11 border p-4">
        <img src={props.item.image} alt={props.item.name} className="img-detail col-4 mb-3"/>
        <div className="col-8 mt-5">
          <h5 >{props.item.name}</h5>
          <p className=" text-muted"><strong>{PriceFormat(props.item.price)}</strong></p>
          <p className="">{props.item.shortDescription}</p>
        </div>
      </div>
    </div>

  );
}
