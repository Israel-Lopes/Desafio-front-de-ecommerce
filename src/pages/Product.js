import React, { Component } from 'react';
import product_default from '../img/product_default.png';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useUrlSearchParams } from "use-url-search-params";

class Product extends Component {
debugger;
  productName = "";
  productPrice = 0;
  productDescription = "";
  productId = 0;

  getProductById = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const PATH_SERVICE = 'http://localhost:8080';
    const LOGIN_SERVICE = `/product/${id}`;

    const PATH = 'http://localhost:3000';
    const HOME = '/home';

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
        this.setState({
          productName: data.productName,
          productPrice: data.productPrice,
          productDescription: data.productDescription,
          productId: data.productId
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  addProductByCart = () => {
    const PRODUCT = {
      productId: this.state.productId,
      productName: this.state.productName,
      productPrice: this.state.productPrice,
      productDescription: this.state.productDescription
    };
    const COOKIE_CART = Cookies.get('cart_loja_online') || null;
    if (COOKIE_CART != null) {
      const COOKIE_CART = Cookies.get('cart_loja_online');
      let products = JSON.parse(COOKIE_CART);
      products.push(PRODUCT);
      Cookies.set('cart_loja_online', JSON.stringify(products), { expires: 7, path: '/' });
    } 
    else if (PRODUCT != null && COOKIE_CART == null) {
      let array = [];
      array.push(PRODUCT);
      Cookies.set('cart_loja_online', JSON.stringify(array), { expires: 7, path: '/' })
    }
  }

  componentDidMount() {
    this.getProductById();
  }

    render() {

      if (!this.state) return null;

      return (
        <div class="container mt-5" id={this.state.productId}>
            <div class="row">
              <div class="col-lg-6">  
                 <img src={product_default} alt="Imagem do produto" class="img-fluid" />
              </div>

            <div class="col-lg-6">
                
                <h1>{this.state.productName}</h1>
                <p>{this.state.productDescription}</p>
                <h3>R$: {this.state.productPrice}</h3>
                <Link to={{
                  pathname: '/cart',
                  state: { id: this.props.id, token: this.props.token },
                  }}>
                    <button class="btn bc-teal text-white btn-block mt-4" onClick={this.addProductByCart}>Comprar</button>
                </Link>
            </div>
           </div>
        </div>
      );
    }
  }

  export default Product;

  
