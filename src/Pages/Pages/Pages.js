import React from 'react';
import './Pages.css';
import Home from '../Home/Home/Home';
import { Routes, Route } from "react-router-dom";
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';
import ApplicationForm from '../ApplicationForm/ApplicationForm/ApplicationForm';
import AfterRegistration from '../AfterRegistration/AfterRegistration/AfterRegistration';
import ApplicationForm1 from '../ApplicationForm1/ApplicationForm1/ApplicationForm1';
import SuggestionForm from '../SuggestionForm/SuggestionForm/SuggestionForm';
import SignUp from '../SignUp/SignUp/SignUp';

const Pages = () => {
  return (
    <div className='all-page-os'>
      {/* <Home /> */}
      {/* <ApplicationForm /> */}
      {/* <ApplicationForm1 /> */}
      {/* <AfterRegistration /> */}
      {/* <SuggestionForm /> */}
      {/* <SignUp /> */}
      
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/applicationform' element={<ApplicationForm />} />
        <Route exact path='/applicationform1' element={<ApplicationForm1 />} />
        <Route exact path='/afterregister' element={<AfterRegistration />} />
        <Route exact path='/suggestionform' element={<SuggestionForm />} />
        <Route exact path='/signup' element={<SignUp />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Pages;
