import React from 'react'
import "./Breadcrum.css"
import arrow_icon from "../Assets/breadcrum_arrow.png"

const Breadcrum = (props) => {
    const { product } = props;  //yaha concept destructuring ka use hoo ha hai 
    return (
        <div className='Breadcrum'>
            HOME <img src={arrow_icon} alt='' /> SHOP <img src={arrow_icon} alt='' />{product.category}<img src={arrow_icon} alt='' />{product.name}
        </div>
    )
}

export default Breadcrum;