import React, { Component } from 'react';
import product_default from '../../img/product_default.png';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import ProductList from '../ProductList';

class Home extends Component {
    render() {
  
      return (
        <div class="container mt-5">
          <div class="row">
            <ProductList/>
        </div>
      </div>
      );
    }
  }

  export default Home;

  
