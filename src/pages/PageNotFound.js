import React, { Component } from 'react';

class PageNotFound extends Component {

    render () {
        return (
            <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <br />
                <br />
                <div className="text-center">
                  <h1 className="display-3">Página não encontrada</h1>
                  <p className="lead">Desculpe, a página que você está tentando acessar não existe.</p>
                <br />
                <br />
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default PageNotFound;

