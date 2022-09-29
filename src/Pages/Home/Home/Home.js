import React from 'react';
import './Home.css';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Benefits from '../Benefits/Benefits';
import YourOwnBetting from '../YourOwnBetting/YourOwnBetting';
import PowerInNumbers from '../PowerInNumbers/PowerInNumbers';
import LeaderBoard from '../LeaderBoard/LeaderBoard';
import MonthlyPlan from '../MonthlyPlan/MonthlyPlan';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
  return (
    <div className='homepage-os'>
        <Header />
        <Banner />
        <YourOwnBetting />
        <Benefits />
        <PowerInNumbers />
        <LeaderBoard />
        <MonthlyPlan />
        <Footer />
    </div>
  )
}

export default Home;
