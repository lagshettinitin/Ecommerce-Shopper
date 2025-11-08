import React ,{useState} from 'react'
import Logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png"
import "./Navbar.css";
import Button from 'react-bootstrap/Button';
import { Link, } from 'react-router-dom';
import { ShopContext } from '../Contexts/ShopContext';
import { useContext } from 'react';



const Navbar = () => {
    const [menue,setmenue]=useState("shop");
    const [menuOpen, setMenuOpen] = useState(false);
    const {getTotalCartItems}=useContext(ShopContext);
    return (
        <div className='navbar'>
            <div className='n-logo'>
                <img src={Logo} alt='' />
            <span>SHOPPER</span>

            </div>
            <button className='n-burger' aria-label="Toggle menu" aria-expanded={menuOpen} onClick={()=>setMenuOpen(o=>!o)}>☰</button>
            <div className={`n-menue ${menuOpen ? 'open' : ''}`} role="navigation">
                <ul onClick={()=>setMenuOpen(false)}>
                    
                    <li onClick={()=>{setmenue("shop")}}><Link style={{textDecoration:"none" ,color:" #626262"}} to="/">Shop</Link>{menue==="Shop"?<hr/>:<></>}</li>
                    <li onClick={()=>{setmenue("mens")}}><Link style={{textDecoration:"none" ,color:" #626262"}} to="/mens">Men</Link>{menue==="mens"?<hr/>:<></>}</li>
                    <li onClick={()=>{setmenue("women")}}><Link style={{textDecoration:"none" ,color:" #626262"}} to="/women">Women</Link>{menue==="women"?<hr/>:<></>}</li>
                    <li onClick={()=>{setmenue("kids")}}><Link style={{textDecoration:"none" ,color:" #626262"} }to="/kids">Kids</Link>{menue==="kids"?<hr/>:<></>}</li>
                </ul>

            </div>
            <div className='n-login-cart'>
              <Link to="/login"> <Button variant="primary" className="my-login-btn">Login</Button></Link>
              <div className='cart-with-badge'>
                <Link to="/cart"> <img src={cart_icon} alt="" /></Link>
                <div className='nav-cart-count'>{getTotalCartItems()}</div>
              </div>
            </div>
            {menuOpen && <div className="n-backdrop" onClick={()=>setMenuOpen(false)} aria-hidden="true"></div>}

        </div>
    )
}

export default Navbar;