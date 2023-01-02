import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Cookies from 'js-cookie';


class Menu extends Component {

    render() {
  
      return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand margin-l1" href="/home">Loja online</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse margin-l5" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="/home">Inicio <span class="sr-only"></span></a>
            </li>
            <li class="nav-item active margin-l50">
              <a class="nav-link" href="/cart">Carrinho <span class="sr-only"></span></a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="/login">Enter account</a>
            </li>
          </ul>
        </div>
      </nav>
      );
    }
  }

  export default Menu;

  
