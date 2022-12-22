import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Cookies from 'js-cookie';




class Login extends Component {

  emailInput = React.createRef();
  passwordInput = React.createRef();

  handleLogin = async () => {

    const PATH_SERVICE = 'http://localhost:8080';
    const LOGIN_SERVICE = '/login';

    const PATH = 'http://localhost:3000';
    const HOME = '/home';

    const loginEmail = this.emailInput.current.value;
    const loginPassword = this.passwordInput.current.value;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        loginEmail: loginEmail,
        loginPassword: loginPassword,
      }),
      timeout: 1000000,
    };

    await fetch(PATH_SERVICE + LOGIN_SERVICE, options)
      .then(response => response.json())
      .then( data => {
        if (data && data.userToken) {
          Cookies.set('token_loja_online', data.userToken, { expires: 7, path: '/' });
          window.location.replace(PATH + HOME);
        }
      })
      .catch(error => {
        console.error(error);
      });


  }

  // Usuario para teste: mn@gmail.com  : 123
  // ruan123@gmail.com : ruan123@gmail.com
  
  render() {
    return (
      <div class="container py-5 px-3 mx-auto">
        <div class="container mt-5">
            <div class="row justify-content-center">
            <div class="col-lg-4">
                <div class="card shadow-lg">
                <div class="card-header bg-primary text-white text-center">
                    <h3>Login</h3>
                </div>
                <div class="card-body">
                    <form>
                    <div class="form-group">
                      <label class="small" for="email">E-mail</label>
                      <input type="email" class="form-control" id="email" placeholder="Seu e-mail" ref={this.emailInput} />
                    </div>
                    <br />
                    <div class="form-group">
                      <label class="small" for="senha">Senha</label>
                      <input type="password" class="form-control" id="password" placeholder="Sua senha" ref={this.passwordInput} />
                    </div>
                    <br />
                    <button type="submit" class="btn btn-primary btn-block login_button" onClick={this.handleLogin}>Entrar</button>
                    </form>
                    <br />
                    <Link class="small" to="/register">Registre-se</Link>
                </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Login;
