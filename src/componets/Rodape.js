import React, { Component } from 'react';
import facebookLogoPNG from '../img/facebook.png';
import instagramLogoPNG from '../img/instagram.png';


class Rodape extends Component {
    render() {
  
      return (
            <div>
                <footer class="bg-dark text-light py-5 mt-5">
                    <div class="container">
                    <div class="row">
                        <div class="col-md-4">
                        <h5>Sobre nós</h5>
                        <p>Somos uma empresa dedicada à criação de soluções inovadoras para o mercado.</p>
                        <p>Fique por dentro de nossas novidades:</p>
                        <form>
                            <div class="form-group">
                            <label for="emailInput">Endereço de e-mail</label>
                            <input type="email" class="form-control" id="emailInput" aria-describedby="emailHelp" />
                            <small id="emailHelp" class="form-text text-muted">Nunca compartilharemos seu e-mail com ninguém.</small>
                            </div>
                        </form>
                        </div>
                        <div class="col-md-4">
                        <h5>Links úteis</h5>
                        <ul class="list-unstyled">
                            <li><a href="#">Termos de uso</a></li>
                            <li><a href="#">Política de privacidade</a></li>
                            <li><a href="#">Fale conosco</a></li>
                            <li><a href="#">Trabalhe conosco</a></li>
                        </ul>
                        </div>
                        <div class="col-md-4">
                        <h5>Redes sociais</h5>
                        <ul class="list-unstyled list-inline">
                            <li class="list-inline-item"><a href="https://www.facebook.com/"><img className="logo-l15" src={facebookLogoPNG}/><i class="fab fa-facebook-f fa-2x"></i></a></li>
                            <li class="list-inline-item"><a href="#"><i class="fab fa-instagram fa-2x"></i></a></li>
                            <li class="list-inline-item"><img className="logo-l15" src={instagramLogoPNG}/><a href="https://www.instagram.com/"><i class="fab fa-linkedin-in fa-2x"></i></a></li>
                        </ul>
                        </div>
                    </div>
                    </div>
                </footer>
            </div>
      );
    }
  }

  export default Rodape;

  
