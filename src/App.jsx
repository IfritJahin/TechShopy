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

        <div style={{ minHeight: height }}>
          <Header />
          <Routes>
            <Route path='/Temp/' element={<Home />} />
            <Route path='/myaccount' element={<Reg />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/help' element={<Help />}></Route>
            <Route path='/checkout' element={<Checkout />}></Route>
            <Route path='/products' element={<Product />}></Route>
          </Routes>
        </div>
        <Footer />
      </div>
    </Router >

  )
}

export default App
