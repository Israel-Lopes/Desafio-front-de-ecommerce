import React, { Component } from 'react';

class Cart extends Component {
    render() {
  
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
                     <th>Quantidade</th>
                     <th>Total</th>
                     <th></th>
                     </tr>
                 </thead>
                 <tbody>
                     
                     <tr>
                     <td>Nome do produto</td>
                     <td>R$100,00</td>
                     <td>
                         <input type="number" class="form-control" value="1" />
                     </td>
                     <td>R$100,00</td>
                     <td>
                         <button class="btn btn-danger btn-sm">Remover</button>
                     </td>
                     </tr>
                     
                     <tr>
                     <td colspan="3" class="text-right">Total:</td>
                     <td>R$100,00</td>
                     <td></td>
                     </tr>
                 </tbody>
                 </table>
                 
                 <div class="text-right mt-4 d-flex flex-row bd-highlight mb-3">
                    <div>
                        <button class="btn btn-primary">Continuar comprando</button>
                    </div>
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

  
