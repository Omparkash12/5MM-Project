import React from 'react'
import './AfterRegistration.css';
import Banner from '../Banner/Banner';
import MonthlyPlan from '../../Home/MonthlyPlan/MonthlyPlan';
import FAQ from '../FAQ/FAQ';
import Newsletter from '../../Shared/Newsletter/Newsletter';

const AfterRegistration = () => {
    return (
        <div>
            <Banner />
            <div className='afterRegistration-monthly-plan-os'>
                <MonthlyPlan />
            </div>
            <FAQ />
            <Newsletter heading='Newletter' paragraph='Be the first to know about specials, discounts and our latest products.' buttonText='Subscribe' placeholeder='enter your e-mail' />
        </div>
    )
}

export default AfterRegistration;
