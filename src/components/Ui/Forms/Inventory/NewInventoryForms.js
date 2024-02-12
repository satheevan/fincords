import React, { useState } from 'react'
import Forms from '..';
import { sourceData } from '../../../../utils/dynamicdata/sourceData';


function NewInventoryForms() {
 const productFields = sourceData.invetoryDetails.inventoryProductFields || alert("Not getting data from inventoryProductFields")
 
 //usestate
 const [inputValue,setInputValue] = useState({phone:"+91",country:"India",about:"I am common man"})
 
 
 let newInventoryForms ={
      title :"New Inventory Form",
      feilds:productFields,
      height:"",
      newInvSubmitHandler:function (data){}      
     }
    
// method
  function inputHandler(e){
    const name =e.target.name;
    const value = e.target.value;
    setInputValue((prev)=>{
      return {...prev,[name]:value}
    })
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log("Form Submited");
    console.log("current State",inputValue);
}

  return (
    <>
    <div className='container'>
      <Forms templateForms={newInventoryForms}/>
    </div>

    <div>
    <form onSubmit={handleSubmit}>
      <label>Enter the name : </label>
      <input type="text"name="name" onChange={inputHandler}></input>
      <label>Enter the age : </label>
      <input type="text" name="age" onChange={inputHandler}></input>
      <label>Enter the phone : </label>
      <input type="text" name="phone" onChange={inputHandler} value={inputValue.phone}></input>
      <label>Enter the country : </label>
      <select name="country" value={inputValue.country} onChange={inputHandler}>
        <option value={"Australia"}>Australia</option>
        <option value={"India"}>India</option>
        <option value={"Austria"}>Austia</option>
        <option value={"ralia"}>ralia</option>
      </select>
      <label>Enter about you</label>
      <textarea value={inputValue.about} name="about" onChange={inputHandler}>

      </textarea>
      <input type='submit' value="Submit"></input>
    </form>

    </div>
    </>
  )
}

export default NewInventoryForms