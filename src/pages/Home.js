import React, { Component } from 'react';
import product_default from '../img/product_default.png';

class Home extends Component {
    render() {
  
      return (
        <div class="container mt-5">
        <div class="row">
          <div class="col-md-3 mb-3">
            <div class="card card-sm">
            <img className="card-img-top" src={product_default}/>
              <div class="card-body">
                <h5 class="card-title">Produto 1</h5>
                <p class="card-text">Descrição do produto 1</p>
                <a href="#" class="btn btn-primary">Ver detalhes</a>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="card card-sm">
            <img className="card-img-top" src={product_default}/>
              <div class="card-body">
                <h5 class="card-title">Produto 2</h5>
                <p class="card-text">Descrição do produto 2</p>
                <a href="#" class="btn btn-primary">Ver detalhes</a>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="card card-sm">
            <img className="card-img-top" src={product_default}/>
              <div class="card-body">
                <h5 class="card-title">Produto 3</h5>
                <p class="card-text">Descrição do produto 3</p>
                <a href="#" class="btn btn-primary">Ver detalhes</a>
              </div>
            </div>
          </div>
          <div class="col-md-3 mb-3">
            <div class="card card-sm">
            <img className="card-img-top" src={product_default}/>
              <div class="card-body">
                <h5 class="card-title">Produto 1</h5>
                <p class="card-text">Descrição do produto 1</p>
                <a href="#" class="btn btn-primary">Ver detalhes</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
  }

  export default Home;

  
