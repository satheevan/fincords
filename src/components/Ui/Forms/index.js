import React from 'react'
// import { useForm } from 'react-hook-form'

function Forms({ templateForms }) {

  // const { register, handleSubmit } = useForm();
  let { title, feilds} = templateForms;
// Component
  function renderFeilds(feilds) {
// useSate
    
    
    return feilds.map((feild, index) => {
      let { label, type, name,classCustom,classes} = feild;
      
      switch (type) {
        case "text":
          return (
            <div key={index} className={(!classCustom["customClassContainer"])&& classes["ClassContainer"]}>
              <label htmlFor={name}className={(!classCustom["customClassLabel"])&& classes["ClassLabel"]}>{label} : </label>
              <input type="text" className={(!classCustom["customClassInput"])&& classes["ClassInput"]} name={name} id={name} />
            </div>
          )
        case "number":
          return (
            <div key={index} className={(!classCustom["customClassContainer"])&& classes["ClassContainer"]}>
              <label htmlFor={name} className={(!classCustom["customClassLabel"])&& classes["ClassLabel"]}>{label} :</label>
              <input type="number" className={(!classCustom["customClassInput"])&& classes["ClassInput"]} name={name} id={name}></input>

            </div>
          )
        case "email":
          return (
            <div key={index}>
              <label htmlFor={name} className={(!classCustom["customClassLabel"])&& classes["ClassLabel"]}>{label} :</label>
              <input type="email" className={(!classCustom["customClassInput"])&& classes["ClassInput"]} name={name} id={name}></input>

            </div>
          )
          case "checkbox":
          return (
            <div key={index}>
              <label htmlFor={name} className={(!classCustom["customClassLabel"])&& classes["ClassLabel"]}>{label} :</label>
              <input type="checkbox" className={(!classCustom["customClassInput"])&& classes["ClassInput"]} name={name} id={name}></input>
            </div>
          )
        default:
          return (
            <div key="">
              <label htmlFor={name}>{label} :</label>
              <span className="red-text">Invaild field "type Error" </span>
            </div>
          )
          
        }
    })
  }
// Mehtods
const handleSubmit =(e)=>{

  console.log("Form submitted");
}
  return (
    <div>
      <form onSubmit={()=>handleSubmit(onSubmit)}>
        <h1>{title}</h1>
        {renderFeilds(feilds)}
        <br />

        <button type='submit' className='btn-Primary'>submit</button>

      </form>


    </div>
  )
}

function onSubmit(value) {
  console.log(value);
}

export default Forms