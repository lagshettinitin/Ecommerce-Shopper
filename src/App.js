import React from 'react';
import Navbar from "./Components/Navbar/Navbar"
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Shop from './Components/Pages/Shop';
import ShopCategory from "./Components/Pages/ShopCategory";
import  Product from "./Components/Pages/Product";
import Cart from "./Components/Pages/Cart";
import LoginSingup from "./Components/Pages/LoginSingup";
import Footer from './Components/Footer/Footer';
import men_banner from "./Components/Assets/banner_mens.png"
import women_banner from "./Components/Assets/banner_women.png"
import kids_banner from "./Components/Assets/banner_kids.png"
function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory  banner={men_banner} category="men"/>}/>
        <Route path='/women' element={<ShopCategory  banner={women_banner} category="women"/>}/> 
        <Route path='/kids' element={<ShopCategory  banner={kids_banner} category="kid"/>}/>
        <Route path='/product' element={<Product/>}> 
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/login' element={<LoginSingup/>}/>
      
      </Routes>
      </BrowserRouter>
      <Footer/>
 
    </div>
  );
}

export default App;
