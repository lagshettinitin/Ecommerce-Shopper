import React ,{useState} from 'react'
import Logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png"
import "./Navbar.css";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const Navbar = () => {
    const [menue,setmenue]=useState("shop");
    return (
        <div className='navbar'>
            <div className='n-logo'>
                <img src={Logo} alt='' />
            <span>SHOPPER</span>

            </div>
            <div className="n-menue">
                <ul>
                    
                    <li onClick={()=>{setmenue("shop")}}><Link style={{textDecoration:"none" ,color:" #626262"}} to="/">Shop</Link>{menue==="Shop"?<hr/>:<></>}</li>
                    <li onClick={()=>{setmenue("mens")}}><Link style={{textDecoration:"none" ,color:" #626262"}} to="/mens">Men</Link>{menue==="mens"?<hr/>:<></>}</li>
                    <li onClick={()=>{setmenue("women")}}><Link style={{textDecoration:"none" ,color:" #626262"}} to="/women">Women</Link>{menue==="women"?<hr/>:<></>}</li>
                    <li onClick={()=>{setmenue("kids")}}><Link style={{textDecoration:"none" ,color:" #626262"} }to="/kids">Kids</Link>{menue==="kids"?<hr/>:<></>}</li>
                </ul>

            </div>
            <div className='n-login-cart'>
            <Link to="/login"> <Button variant="primary" className="my-login-btn">Login</Button></Link>
           <Link to="/cart" style={{position:"absolute" , left:"1120px"}}> <img src={cart_icon} alt="" /></Link>
             </div>
            <div className='nav-cart-count'>0</div>


        </div>
    )
}

export default Navbar;