import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
// data
import CustomButton from '../../components/shared/customButton'
import { sourceData } from '../../utils/dynamicdata/sourceData'

const NavBar = ({className="",...props})=> {
  const navContent = sourceData.basicItems.navBar
  const [switchMenuBtn,setswitchMenuBtn] =useState(false)
  // method
  const menuBtnHandler=()=>{
    setswitchMenuBtn(!switchMenuBtn)
  }
  console.log(switchMenuBtn);
  // component
  const navHtmlListContent=()=> (

    <ul  className='list-container row'>
    {
  Object.keys(navContent).map((keyValue,ind)=>(
      <li key={ind} className='col nav-list-value'><Link to={navContent[keyValue].path} className='nav-menu-content'>{navContent[keyValue].label}</Link></li>
      ))
    }
    </ul>

  )
  return (
    <div className={`nav-container ${className}`}>
      <div className='menu-btn-nav-content'>
      <CustomButton classNameBtn="header-menu-btn-icon" onClickHandler={()=>menuBtnHandler()} title={<img src={require('../../asset/icons/menu.svg').default} alt="menu icon" width={"45px"}/>}></CustomButton>
      {(switchMenuBtn)&&
      navHtmlListContent()}
      </div>             
      <div className='tab-view-nav-content'>
        {navHtmlListContent()}
          
      </div>
    </div>
  )
}

export default NavBar