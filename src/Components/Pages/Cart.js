import React, { useContext } from 'react'
import CartItems from '../Cartitems/CartItems';
import { ShopContext } from '../Contexts/ShopContext';

function Cart() {
 
  return (
    <div>
      <CartItems/>
    </div>
  )
}

export default Cart;