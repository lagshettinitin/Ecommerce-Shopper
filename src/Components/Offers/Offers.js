import React from 'react'
import Exclusive_image from "../Assets/exclusive_image.png";
import "./Offers.css";

const Offers = () => {
  return (
    <div className='offers anim-fade'>
        <div className='offers-left anim-up'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>ONLY ON BEST SELLERS PRODUCTS</p>
            <button>Check Now</button>

        </div>
        <div className='offers-right'>
        <img className='anim-float' src={Exclusive_image} alt=''/>

        </div>
    </div>
  )
}

export default Offers;