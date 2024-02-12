import { useState } from "react";

const CustomUseSate=(initialValue)=>{
    
    const [customValue,setCustomValue] = useState(initialValue)

    return[customValue,setCustomValue]
}
export default CustomUseSate;