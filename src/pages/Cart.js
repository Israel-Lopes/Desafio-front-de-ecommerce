import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import CartItem from '../componets/CartItem';

class Cart extends Component {

state = {
  cartItem: []
}

  productName = "";
  productPrice = 0;
  productDescription = "";
  productId = 0;

  products = [];

  addProductByCart = () => {
    const COOKIE_CART = Cookies.get('cart_loja_online') || null;
    if (COOKIE_CART != null) {
      let products = JSON.parse(COOKIE_CART);
      this.setState({ 
        cartItem: products.map(item => item) 
    });
    } else { 
            console.log('Buscar no banco'); 
    }

  }

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

  componentDidMount() {
    this.getProductById();
    this.addProductByCart();
  }
    render() {
  
    if (!this.state) return null;

      return (
        <div class="container py-5 px-3 mx-auto">
         <div class="container mt-5">
             <div class="row">
             <div class="col-lg-12">
                 <h1>Carrinho de compras</h1>
                 <table class="table table-striped">
                 <thead>
                     <tr>
                     <th>Produto</th>
                     <th>Preço</th>
                     <th />
                     <th>Total</th>
                     <th></th>
                     </tr>
                 </thead>
                 <tbody>
                    {this.state.cartItem.map(item => (
                        <CartItem id={item.productId} name={item.productName} price={item.productPrice} />
                    ))}
                    <tr>
                    <td colspan="3" class="text-right">Total:</td>
                    <td>R$100,00</td>
                    <td></td>
                    </tr>
                 </tbody>
                 </table>
                 <div class="text-right mt-4 d-flex flex-row bd-highlight mb-3">
                    <Link to={{
                        pathname: '/home',
                        }}>
                        <div>
                            <button class="btn btn-primary">Continuar comprando</button>
                        </div>
                    </Link>
                    <div class="margin-l1">
                        <button class="btn btn-success">Finalizar compra</button>
                    </div>
                 </div>
             </div>
             </div>
         </div>
       </div>
 
      );
    }
  }

  export default Cart;

  
