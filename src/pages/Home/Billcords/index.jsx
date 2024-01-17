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
        <div className='container billing-conntainer'>
            <div className='col-sm-12 col-md-12 col-lg-4' >
                <div className=''>
                    <img src={require("../../../asset/images/fincords.png")} alt='fincord-logo' />
                </div>
                <div>
                    <input type='search' name='search' />
                </div>
            </div>
            <div className='col-lg-8'>
                <div className='container company-name'>
                    <h4>Alobin Technologies</h4>
                </div>
                <div className='company-nature-busines'>
                    <h1>Billing Recordings</h1>
                </div>
                <div className='btn-billing mt-2 p-3' >
                    <CustomButton classNameBtn={"custon-billing-btn p-3 px-4"} title={"Billing"} onClickHandler={btnBillingHandler}/>
                </div>
                <div className='billing-voucher-card-container'>
                    <CustomCard className={"billing-voucher-card"}>
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
                <div className='billing-voucher-card-container'>
                    <CustomCard className={"billing-voucher-card"}>
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
            </div>


        </div>
    )
}
export default Billcords;