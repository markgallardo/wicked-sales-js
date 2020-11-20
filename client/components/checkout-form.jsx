import React from 'react';
import TotalPrice from './total-price';

export default class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      creditCard: '',
      shippingAddress: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitOrder = this.submitOrder.bind(this);
  }

  handleChange() {
    const inputName = event.target.name;
    const value = event.target.value;
    const newState = {};
    newState[inputName] = value;
    this.setState(newState);
  }

  submitOrder() {
    event.preventDefault();
    this.props.placeOrder(this.state);
    this.setState({ name: '', creditCard: '', shippingAddress: '' });
    this.props.setView('catalog', {});
  }

  render() {
    return (

      <div className="container-fluid summary-container details-card">
        <div className="row">
          <h3 className=""><strong>My Cart</strong></h3>
          <h5 className="col-12 text-muted">
            Order Total: {TotalPrice(this.props.cart)}</h5>
        </div>
        <div>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                name="name"
                type="text"
                className="form-control"
                value={this.state.name}
                onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="creditCard">Credit Card</label>
              <input
                name="creditCard"
                type="text"
                className="form-control"
                value={this.state.creditCard}
                onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="shippingAddress">Shipping Address</label>
              <textarea
                name="shippingAddress"
                className="form-control"
                rows="3"
                value={this.state.shippingAddress}
                onChange={this.handleChange}>
              </textarea>
            </div>
            <div className="container">
              <div className="form-footer row justify-content-between">
                <div className="cursor text-muted" onClick={() => this.props.setView('catalog', {})}><i className="fas fa-chevron-left"> Continue Shopping </i></div>
                <button
                  className="btn btn-primary" onClick={this.submitOrder}> Place Order </button>
              </div>
            </div>
          </form>
        </div>
      </div>

    );
  }
}
