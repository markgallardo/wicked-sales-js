import React from 'react';
import PriceFormat from './priceFormat';
export default function ProductListItem(props) {

  return (
    <div className="card mb-4 card-hover cardItem product-img" onClick={() => props.setView('details', { productId: props.productId })}>
      <img src={props.products.image} alt={props.products.name} className="card-img-top"/>
      <div className="card-body">
        <h5 className="card-title">{props.products.name}</h5>
        <p className="card-text text-muted"><strong>{PriceFormat(props.products.price)}</strong></p>
        <p className="card-text">{props.products.shortDescription}</p>
      </div>
    </div>
  );
}
