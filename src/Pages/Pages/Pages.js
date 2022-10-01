import React from 'react';
import './Pages.css';
import Home from '../Home/Home/Home';
import { Routes, Route } from "react-router-dom";
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import Register from '../Register/Register/Register';

const Pages = () => {
  return (
    <div className='all-page-os'>
      {/* <Home /> */}
      {/* <Register /> */}
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/register' element={<Register />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Pages;
