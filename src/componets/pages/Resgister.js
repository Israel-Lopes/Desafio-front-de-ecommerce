import React, { Component } from 'react';

class Register extends Component {

    nameInput = React.createRef();
    emailInput = React.createRef();
    passwordInput = React.createRef();
    confirmPasswordInput = React.createRef();
  
    handleRegister = async () => {

      const PATH_SERVICE = 'http://localhost:8080';
      const REGISTER_SERVICE = '/registration';
  
      const PATH = 'http://localhost:3000';
      const HOME = '/login';
  
      const registrationName = this.nameInput.current.value;
      const registrationEmail = this.emailInput.current.value;
      const registrationPassword = this.passwordInput.current.value;
      const confirmPassword = this.confirmPasswordInput.current.value;

      if (confirmPassword == registrationPassword) {

            const options = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  registrationName: registrationName,
                  registrationEmail: registrationEmail,
                  registrationPassword: registrationPassword,
                }),
              };

              await fetch(PATH_SERVICE + REGISTER_SERVICE, options)
                .then(response => response.json())
                .then(data => { 
                    if (data && data.userName && data.userName == registrationName.current.value) {
                      window.location.replace(PATH + HOME);
                    }
                });
      }
      // Usuario para teste: mn@gmail.com  : 123
    }

    render() {
  
      return (
        <div class="container py-5 px-3 mx-auto">
        <div class="container mt-5">
            <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="card shadow-lg">
                <div class="card-header bc-teal text-white text-center">
                    <h3>Cadastro</h3>
                </div>
                <div class="card-body">
                    <form>
                    <div class="form-group">
                        <label class="small" type="text-xs" for="nome">Nome</label>
                        <input type="text-xs" class="form-control" id="name" placeholder="Seu nome" ref={this.nameInput} />
                    </div>
                    <br />
                    <div class="form-group">
                        <label class="small" type="text-xs" for="email">E-mail</label>
                        <input type="email" class="form-control" id="email" placeholder="Seu e-mail" ref={this.emailInput}/>
                    </div>
                    <br />
                    <div class="form-group">
                        <label class="small" type="text-xs" for="senha">Senha</label>
                        <input type="password" class="form-control" id="password" placeholder="Sua senha" ref={this.passwordInput}/>
                    </div>
                    <br />
                    <div class="form-group">
                        <label class="small" type="text-xs" for="confirmar-senha">Confirmar senha</label>
                        <input type="password" class="form-control" id="confirm-password" placeholder="Confirme sua senha" ref={this.confirmPasswordInput}/>
                    </div>
                    <br />
                    <button type="submit" class="btn bc-teal btn-block text-white" onClick={this.handleRegister}>Cadastrar</button>
                    </form>
                </div>
                </div>
            </div>
            </div>
        </div> 
      </div>
      );
    }
  }

  export default Register;

  
