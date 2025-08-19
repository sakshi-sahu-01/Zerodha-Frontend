import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './index.css';
import "react-toastify/dist/ReactToastify.css";
import HomePage from '.landing_page/hme/HomePage';





import About from "./landing_page/about/About";
import ProductPage from "./landing_page/products/ProductPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import Support from "./landing_page/support/Support";
import Notfound from './landing_page/Notfound';
import Navbar from './landing_page/Navbar';
import Footer from './landing_page/footer.js';




import SignupPage from 'src/landing_page/Signup/SignupPage';
import LoginPage from 'src/landing_page/Signup/Login';
import 'react-toastify/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
    
     <Navbar />
  <Routes>
    <Route path="/" element={<Homepage/>}></Route>
    <Route path="/signup/*" element={<SignupPage/>}></Route>
    <Route path="/Login/*" element={<LoginPage/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/product" element={<ProductPage/>}></Route>
    <Route path="/pricing" element={<PricingPage/>}></Route>
    <Route path="/support" element={<Support/>}></Route>
    <Route path="*" element={<Notfound/>}></Route>
  </Routes>
  <Footer />
  </BrowserRouter>

);