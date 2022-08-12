import React,{useState} from 'react'
import '../App.css'

const FormInput = (props) =>{
    const [focused,setFocused] = useState(false)
    const {onChange,errorMessage,label,id,...inputProps} = props

    const handleFocus =(e) =>{ 
        setFocused(true)
    }

    return(
        <>
            <label >{label}</label>
            <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
            <span className="error-span">{errorMessage}</span>
        </>
    )
}

export default FormInput