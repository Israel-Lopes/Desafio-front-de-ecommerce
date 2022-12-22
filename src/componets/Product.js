import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import product_default from '../img/product_default.png';

class Product extends Component {

    handleDetails = async () => {
        const PATH_SERVICE = 'http://localhost:8080';
        const LOGIN_SERVICE = '/product/' + this.props.id;
    
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
            this.setState({ product: data });
          })
          .catch(error => {
            console.error(error);
          });
      }

    render() {
  
      return (
          <div class="card card-sm" id={this.props.id}>
            <img className="card-img-top" src={product_default}/>
            <div class="card-body">
                <h5 class="card-title">{this.props.title}</h5>
                <p class="card-text">R$: {this.props.price}</p>
                <Link to={{
                    pathname: '/product',
                    search: `?id=${this.props.id}`,
                  }} class="btn btn-primary" id={this.props.id}>Ver detalhes</Link>
                
            </div>
         </div>
      );
    }
  }

  export default Product;

  
