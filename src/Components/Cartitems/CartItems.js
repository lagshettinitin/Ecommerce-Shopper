import React,{useContext} from 'react'
import "./CartItems.css";
import { ShopContext } from '../Contexts/ShopContext';
import remove_icon from "../Assets/cart_cross_icon.png";


const CartItems = () => {
     const {  getTotalCartAmount,all_product,cartItems,removeFromCart}=useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className='cartitems-format-main'>
            <p>Product</p>
            <p>Tittle</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
            <hr/>
            </div>
         {
              all_product.map((e)=>{
                if(cartItems[e.id] > 0){
                  return  <div>
              <div className='cartitems-format cartitems-format-main'>
                <img className='carticon-product-icon' src={e.image} alt=''/>
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <div className='cartitems-quantity'>{cartItems[e.id]}</div>

                <p>${e.new_price*cartItems[e.id]}</p>
                <img src={remove_icon} className='cartitems-remove-icon' onClick={()=>{removeFromCart(e.id)}} alt=''/>
              </div>
             <hr/>
            </div>


                }
                return null;
              })}  
             <div className='cartitems-down'>
              <div className='cartitems-total'>
                <h1>Cart Totals</h1>
                <div>
                  <div className='cartitems-total-items'>
                    <p>Subtotal</p>
                    <p>${ getTotalCartAmount()}</p>
                  </div>
                  <hr/>
                  <div className='cartitems-total-items'>
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className='cartitems-total-items'>
                  <h3>Total</h3>
                  <h3>${ getTotalCartAmount()}</h3>

                </div>
                <button>PROCEED TO CHECKOUT</button>
                <div className='cartitems-promocode'>
                  <p>If you have a promocode,Enter it here</p>
                  <div className='cartitems-promobox'>
                    <input type='text' placeholder='promo code'/>
                    <button>Submit</button>
                  </div>
                </div>
              </div>
                </div>   

                </div>
                
    </div>
  )
}

export default CartItems;