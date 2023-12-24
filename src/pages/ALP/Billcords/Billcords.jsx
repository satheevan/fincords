import React from 'react';
import Billingdata from '../../../Json/Billscords.json';
import { Link } from 'react-router-dom';


const Billcords = () => {
    return (
        <div className='bilcord-container'>
            <h1>Billing Page</h1>
            <span>{Billingdata.Billcords.companyInfo.comapanyLogo}</span>
            <span>{Billingdata.Billcords.companyInfo.comapanyName}</span>
            <span>{Billingdata.Billcords.companyInfo.comapanyAddress}</span>

            <nav className='billing-nav-container'>
                {Billingdata.Billcords.billingMenus.map((menu, index) => (
                    <ul>
                        <li title={menu.alais} key={index}><Link to={menu.path}>{menu.title}</Link></li>
                    </ul>
                ))
                }
            </nav>





        </div >
    )
}
export default Billcords;