import React from 'react';
import PriceFormat from './priceFormat';
export default function ProductListItem(props) {

  return (
    <div className="card mb-5" onClick={() => props.setView('details', { productId: props.productId })}>
      <img src={props.products.image} alt={props.products.name} className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">{props.products.name}</h5>
        <p className="cardtext text-muted">{PriceFormat(props.products.price)}</p>
        <p className="cardtext">{props.products.shortDescription}</p>
      </div>
    </div>
  );
}
