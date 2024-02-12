import React from 'react'
import './button.css'

const CustomButton=({title,classNameBtn,onClickHandler,...props}) =>{
  return (
    <div className={props.containerClassName || ""}>
    <button type={`${props.submit}||'button'`} className={`button ${classNameBtn || ""}`} onClick={onClickHandler}>{title || ""}</button>
    </div>
  )
}

export default CustomButton