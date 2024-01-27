import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
// data
import CustomButton from '../../components/shared/customButton'
import { sourceData } from '../../utils/dynamicdata/sourceData'

const NavBar = ({className="",...props})=> {
  const navContent = sourceData.basicItems.navBar

  return (
    <div className={`nav-container ${className}`}>
      {/* <CustomButton classNameBtn="header-menu-btn-icon" onClickHandler={()=>alert("working")} title={<img src={require('../../asset/icons/menu.svg').default} alt="menu icon" width={"50px"}/>}></CustomButton> */}
                        
      <div className='nav-content'>
        
            <ul  className='list-container row'>
            {
          Object.keys(navContent).map((keyValue,ind)=>(
              <li key={ind} className='col'><Link to={navContent[keyValue].path} className='nav-menu-content'>{navContent[keyValue].label}</Link></li>
              ))
            }
            </ul>
      </div>
    </div>
  )
}

export default NavBar