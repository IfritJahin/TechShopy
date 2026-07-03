import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import useWindowSize from './useWindowSize';
import Reg from './components/Reg';
import Contact from './components/Contact';
import Help from './components/Help';
import Checkout from './components/Checkout';
import Product from './components/Product';
function App() {
  const { height } = useWindowSize();
  return (
    <Router>
      <div>

        <div style={{ minHeight: height, overflowX: 'hidden' }}>
          <Header />
          <Routes>
            <Route path='/TechShopy/' element={<Home />} />
            <Route path='/TechShopy/myaccount' element={<Reg />} />
            <Route path='/TechShopy/contact' element={<Contact />} />
            <Route path='/TechShopy/help' element={<Help />}></Route>
            <Route path='/TechShopy/checkout' element={<Checkout />}></Route>
            <Route path='/TechShopy/products' element={<Product />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router >

  )
}

export default App
