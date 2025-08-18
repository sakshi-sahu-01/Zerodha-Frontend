import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import './index.css';
import "react-toastify/dist/ReactToastify.css";


import Homepage from './landing_page/Home/Homepage';









import AboutPage from "./landing_page/about/AboutPage";
import ProductPage from "./landing_page/products/ProductsPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import SupportPage from "./landing_page/support/SupportPage";
import NotFound from "./NotFound";
import Navbar from './landing_page/Navbar';
import Footer from "./landing_page/Footer";
import SignupPage from './landing_page/signup/SignupPage';
import 'react-toastify/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

<BrowserRouter>
    
     <Navbar />
  <Routes>
    <Route path="/" element={<Homepage/>}></Route>
    <Route path="/signup/*" element={<SignupPage/>}></Route>
      <Route path="/about" element={<AboutPage />} />
     <Route path="/product" element={<ProductPage />} />
    <Route path="/pricing" element={<PricingPage/>}></Route>
       <Route path="/support" element={<SupportPage />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  <Footer />
  </BrowserRouter>

);