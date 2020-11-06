import React from 'react';
import Header from './header';
import ProductList from './product-list';
import ProductDetails from './product-details';
import CartSummary from './cart-summary';
import CheckoutFrom from './checkout-form';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: { name: 'catalog', params: {} },
      cart: []
    };
    this.setView = this.setView.bind(this);
    this.getCartItems = this.getCartItems.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.placeOrder = this.placeOrder.bind(this);
  }

  componentDidMount() {
    this.getCartItems();
  }

  setView(name, params) {
    this.setState({ view: { name: name, params: params } });
  }

  getCartItems() {
    fetch('/api/cart')
      .then(result => result.json())
      .then(items => this.setState({ cart: items }))
      .catch(err => console.error(err));
  }

  addToCart(product) {
    const request = {
      method: 'POST',
      body: JSON.stringify(product),
      headers: { 'content-type': ' application/json' }
    };
    fetch('/api/cart', request)
      .then(result => result.json())
      .then(product => {
        const updateCart = this.state.cart.slice();
        updateCart.push(product);
        this.setState({ cart: updateCart });
      });
  }

  placeOrder(order) {
    const request = {
      method: 'POST',
      body: JSON.stringify(order),
      headers: { 'content-type': ' application/json' }
    };
    fetch('/api/orders', request)
      .then(() => this.setState({
        view: { name: 'catalog', params: {} },
        cart: []
      }));
  }

  render() {
    let view = '';
    if (this.state.view.name === 'catalog') {
      view = <ProductList setView={this.setView}/>;
    } else if (this.state.view.name === 'details') {
      view = <ProductDetails addToCart={this.addToCart} setView={this.setView} params={this.state.view.params}/>;
    } else if (this.state.view.name === 'cart') {
      view = <CartSummary setView={this.setView} cart={this.state.cart}/>;
    } else if (this.state.view.name === 'checkout') {
      view = <CheckoutFrom cart={this.state.cart} placeOrder={this.placeOrder} setView={this.setView}/>;
    }
    return (
      <>
        <Header cartItemCount={this.state.cart.length} setView={this.setView}/>
        {view}
      </>
    );
  }
}
