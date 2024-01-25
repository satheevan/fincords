import React from 'react';
import './billcords.css';
import CustomButton from '../../../components/shared/customButton';
import { CustomCard } from '../../../components/shared/customCard';


const Billcords = () => {

// method
const btnBillingHandler=()=>{
    alert("billing working on it")
}
const btnAdminLogHandler=()=>{
    alert("admin log working on it")
}
const btnUsersLogHandler=()=>{
    alert("admin log working on it")
}
    return (
        <div className='container-lg'>
        
            <div className='billing-conntainer-header row' >
                <div className='fincods-logo d-flex justify-content-center col-md-4'>
                    <img src={require("../../../asset/images/fincords.png")} alt='fincord-logo' />
                </div>
                <div className='col-md-8'>
                    <input type='search' className='mt-4' name='search' size={50}/>
                    {/* <div style={{height:"500px"}}></div> */}
                </div>
            </div>
            <div className='billing-conntainer-article row'>
                <div className='compay-name col-12 mt-3'>
                    <h4>Alobin Technologies</h4>
                </div>
                <div className='company-nature-busines col-12'>
                    <h1>Billing Recordings</h1>
                </div>
                <div className='btn-billing col-12' >
                    <CustomButton classNameBtn={"custon-billing-btn mt-2 px-4"} title={"Billing"} onClickHandler={btnBillingHandler}/>
                </div>
                <div className='billing-voucher-card-container col-md-4 col-lg-3 mt-3'>
                    <CustomCard className={"billing-voucher-card row-col-auto"}>
                        <h5 className='mx-2'>Total Voucher</h5>
                        <div className='voucher-count d-flex mx-3'>
                        <div className='admin-logs-container mx-2'>
                            <span className='mx-3'>841</span>
                            <CustomButton classNameBtn={"btn-admin-logs"} title={"Admin"} onClickHandler={btnAdminLogHandler}/>
                        </div>
                        <div className='user-logs-container'>
                            <span className='mx-3'>401</span>
                            <CustomButton classNameBtn={"btn-users-logs"} title={"Users"} onClickHandler={btnUsersLogHandler}/>
                        </div>
                        <div className='total-voucher-entered'>1223 bills</div>
                        </div>
                    </CustomCard>
                </div>
                <div className='billing-voucher-card-container col-md-4 col-lg-3 mt-3 mb-2'>
                    <CustomCard className={"billing-voucher-card row-col-auto"}>
                        <h5 className='mx-2'>Value</h5>
                        <div className='voucher-count d-flex mx-3'>
                        <div className='admin-logs-container mx-2'>
                            <span className='mx-3'>7648</span>
                            <CustomButton classNameBtn={"btn-admin-logs"} title={"Admin"} onClickHandler={btnAdminLogHandler}/>
                        </div>
                        <div className='user-logs-container'>
                            <span className='mx-3'>4352</span>
                            <CustomButton classNameBtn={"btn-users-logs"} title={"Users"} onClickHandler={btnUsersLogHandler}/>
                        </div>
                        <div className='total-voucher-entered'>$ 12000</div>
                        </div>
                    </CustomCard>
                </div>
                <div className='col-lg-6'></div>
            </div>


        </div>
    )
}
export default Billcords;