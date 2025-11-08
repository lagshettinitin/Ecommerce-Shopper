import React, { useContext } from 'react'
import "./ProductDisplay.css"
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png";
import { ShopContext } from '../Contexts/ShopContext';
import { useNavigate } from "react-router-dom";
const PorductDisplay = (props) => {
     const {product}=props   //yaha destructuring ka concept use hoo ha hai 
     const{addToCart}=useContext(ShopContext);
     const navigate = useNavigate();

  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>

            </div>
            <div>
                <img className='productdisplay-main-img' src={product.image} alt=''/>

            </div>

        </div>
        <div className='productdisplay-right'>
            <h1>{product.name}</h1>
            <div className='productdisplay-right-stars'>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/> 
                <img src={star_dull_icon} alt=''/>  
                <p>(122)</p>
            </div>
            <div className='productdisplay-right-prices'>
                <div className='productdisplay-right-price-old'>${product.old_price}</div>
                <div className='productdisplay-right-price-new'>${product.new_price}</div>
            </div>
            <div className='productdisplay-right-description'>
            Stay comfortable and stylish with our classic cotton T-shirt. Made from soft, breathable fabric, 
            it’s perfect for everyday wear. 
              </div>
            <div className='productdisplay-right-size'>
                <h1>Select Size</h1>
                <div className='productdisplay-right-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div> 
                    <div>XL</div>
                    <div>XXL</div> 
                </div>
                <button className='productdisplay-addtocart-desktop' onClick={()=>{addToCart(product.id);navigate("/cart");}}>ADD TO CART</button>
                <p className="productdisplay-right-categorys">
                    <span>Categeory:</span>Women ,T-shirts ,Crop top
                </p>
                <p className="productdisplay-right-category">
                    <span>Tages:</span>Moder, Latest
                </p>
            </div>     
           
                
                

        </div>
        {/* Mobile sticky add to cart bar */}
        <div className='productdisplay-stickybar'>
          <div className='stickybar-inner'>
            <div className='sticky-price'>${product.new_price}</div>
            <button className='sticky-addtocart' onClick={()=>{addToCart(product.id);navigate("/cart");}}>ADD TO CART</button>
          </div>
        </div>
    </div>
  )
}

export default PorductDisplay;