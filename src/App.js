import "./App.css";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import {  Route,   Routes } from "react-router-dom";
import Products from "./component/Products";
import Product from "./component/Product";
import Cart from "./component/Cart";
import About from "./component/About";
import Login from "./component/buttons/Login";
import Register from "./component/buttons/Register";
import Contact from "./component/Contact";
import Footer from "./component/Footer";


function App() {
  return (
    <>
    
    
      <Navbar />
      
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/products" element={<Products/>} />
        <Route  path="/product/:id" element={<Product/>} />
        <Route  path="/cart" element={<Cart/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/> 
         
         <Route path="/login" element={<Login/>}/> 
         <Route path="/register" element={<Register/>}/> 
         
      </Routes>
      <Footer/>
      
      
      
    </>
  );
}

export default App;
