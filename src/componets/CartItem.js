import React, { Component } from 'react';
import Cookies from 'js-cookie';

class CartItem extends Component {

    products = [];

    removeItemCart = (id) => {
        const COOKIE_CART = Cookies.get('cart_loja_online') || null;
        debugger;
        if (COOKIE_CART != null) {
          let products = JSON.parse(COOKIE_CART);
          const updatedProducts = products.filter(item => item.productId !== id);
          this.setState({ cartItem: updatedProducts });
          Cookies.set('cart_loja_online', JSON.stringify(updatedProducts), { expires: 7, path: '/' });
          window.location.reload();
        } 
      }
    
    render() {
        return (
            <tr className={this.props.id}>
            <td>{this.props.name}</td>
            <td>R${this.props.price},00</td>
            <td>
                <div className="margin-l10" />
            </td>
            <td>R${this.props.price}</td>
            <td>
            <button className="btn btn-danger btn-sm" onClick={() => this.removeItemCart(this.props.id)}>Remover</button>

            </td>
            </tr>
        );
    }

}
export default CartItem;
