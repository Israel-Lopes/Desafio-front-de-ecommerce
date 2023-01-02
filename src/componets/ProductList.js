import React, { Component } from 'react';
import ProductItem from './ProductItem';

class ProductList extends React.Component {
  state = {
    products: []
  }

  componentDidMount() {
    this.handleLogin();
  }

  handleLogin = async () => {
    const PATH_SERVICE = 'http://localhost:8080';
    const LOGIN_SERVICE = '/product';

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 1000000,
    };

    await fetch(PATH_SERVICE + LOGIN_SERVICE, options)
      .then(response => response.json())
      .then( data => {
        this.setState({ products: data });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    return (
      <div class="row">
        {this.state.products.map(product => (
        <div class="col-md-3 mb-3">
          <ProductItem id={product.productId} title={product.productName} price={product.productPrice} />
        </div>
        ))}
      </div>
    )
  }
}

export default ProductList;
