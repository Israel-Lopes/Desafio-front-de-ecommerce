import React, { Component } from 'react';
import product_default from '../img/product_default.png';

class Catalog extends Component {
    render() {
  
      return (

        <div class="container mt-5">
            <div class="row">
            
            <div class="col-lg-3 mb-3">
    
                <div class="card h-100">
                <img className="card-img-top" src={product_default}/>
                <div class="card-body">
                    <h4 class="card-title">Nome do produto</h4>
                    <p class="card-text">Descrição do produto</p>
                </div>
                <div class="card-footer">
                    <h3>Preço: R$100,00</h3>
                    <button class="btn btn-primary btn-block">Comprar</button>
                </div>
                </div>
            </div>
            <div class="col-lg-3 mb-3">
    
                <div class="card h-100">
                <img className="card-img-top" src={product_default}/>
                <div class="card-body">
                    <h4 class="card-title">Nome do produto</h4>
                    <p class="card-text">Descrição do produto</p>
                </div>
                <div class="card-footer">
                    <h3>Preço: R$100,00</h3>
                    <button class="btn btn-primary btn-block">Comprar</button>
                </div>
                </div>
            </div>
            <div class="col-lg-3 mb-3">
    
                <div class="card h-100">
                <img className="card-img-top" src={product_default}/>
                <div class="card-body">
                    <h4 class="card-title">Nome do produto</h4>
                    <p class="card-text">Descrição do produto</p>
                </div>
                <div class="card-footer">
                    <h3>Preço: R$100,00</h3>
                    <button class="btn btn-primary btn-block">Comprar</button>
                </div>
                </div>
            </div>
            <div class="col-lg-3 mb-3">
    
                <div class="card h-100">
                <img className="card-img-top" src={product_default}/>
                <div class="card-body">
                    <h4 class="card-title">Nome do produto</h4>
                    <p class="card-text">Descrição do produto</p>
                </div>
                <div class="card-footer">
                    <h3>Preço: R$100,00</h3>
                    <button class="btn btn-primary btn-block">Comprar</button>
                </div>
                </div>
            </div>
            <div class="col-lg-3 mb-3">
    
                <div class="card h-100">
                <img className="card-img-top" src={product_default}/>
                <div class="card-body">
                    <h4 class="card-title">Nome do produto</h4>
                    <p class="card-text">Descrição do produto</p>
                </div>
                <div class="card-footer">
                    <h3>Preço: R$100,00</h3>
                    <button class="btn btn-primary btn-block">Comprar</button>
                </div>
                </div>
            </div>
            </div>
        </div>
      );
    }
  }

  export default Catalog;

  
