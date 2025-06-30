import React,{useContext} from 'react'
import "./CartItems.css";
import { ShopContext } from '../Contexts/ShopContext';

const CartItems = () => {
     const {all_products,CartItems,removeFromCart}=useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className='cartitems-format-main'>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
            <p></p>
        </div>
    </div>
  )
}

export default CartItems