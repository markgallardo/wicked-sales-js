import React from 'react';

export default function CheckoutDisclaimer(props) {
  function handleClick() {
    props.setView('checkout', {});
  }

  return (
    <div className="container">
      <div className="justify-content-center details-card">
        <div className="d-flex flex-wrap justify-content-center p-4">
          <h3 className="col-12 d-flex justify-content-center">Disclaimer</h3>
          <p className="col-12">This website is not a real store just for demo purposes only. no real purchases will be made. Please do not use any personal information. Please click the button below to continue.</p>
          <button className="btn-primary btn" onClick={handleClick}>Click to agree</button>
        </div>
      </div>
    </div>

  );
}
