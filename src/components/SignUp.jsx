import React,{useState} from 'react'
import "../App.css"
import {Link,useNavigate} from 'react-router-dom'
import FormInput from './FormInput'

const SignUp = () =>{
    let navigate = useNavigate()

    const [error,setError] = useState("");
    const [values,setValues] = useState({
        email:"",
        username:"",
        password:"",
    })

    const inputs =[
        {
            id:1,
            label:"Username",
            name:"username",
            type:"text",
            placeholder:"Enter username",
            errorMessage:"Username is invalid. ",
            required:true,
            pattern:"^[A-Za-z0-9 ]{3,20}"
        },
        {
            id:2,
            label:"Email address",
            name:"email",
            type:"email",
            placeholder:"Enter email address",
            errorMessage:"Email address is invalid. ",
            required:true,
        },
        {
            id:3,
            label:"Password",
            name:"password",
            type:"password",
            placeholder:"Enter user password",
            errorMessage:"Password should be between 8 to 20 characters long. ",
            required:true,
            pattern:"^[A-Za-z0-9]{8,20}"
        }
    ]

    const onChange = (e) =>{
        setValues({...values,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        setError(false)
        e.preventDefault();
        let users = JSON.parse(localStorage.getItem('users'))

        let messages = []

        if(users !== null && users.some(user => user.username === values.username)){
            messages.push("The username already exists.")
        }
        if(users !== null && users.some(user => user.email === values.email)){
            messages.push("The email address already exists.")
        }

        if(messages.length > 0){
            const s_error = messages
            localStorage.setItem("sign-up-errors",JSON.stringify(s_error))
            setError("username or email address already exists.")
        }else{
            if(users){
                users.push({username:values.username,email:values.email,password:values.password})
                localStorage.setItem("users",JSON.stringify(users))
            }else{
                localStorage.setItem('users', JSON.stringify([{username:values.username,email:values.email,password:values.password}]));
            }
           navigate("/sign-in", { replace: true });
        }
    }

    return (
 
    <div className="content">
        <div className="row row2">
            <div className="product-col4">
                <img src={"./images/log.svg"} alt ="Sign-up"/>
            </div>
            <div className="sign-col">
                <div className="form-box">
                    <h2>Register</h2>
                    <form id="signIn" onSubmit={handleSubmit}>
                        <span className="e-span">{error}</span>
                        {
                            inputs.map((input)=>{
                                return(
                                    <FormInput key={input.id} 
                                        {...input} name={input.name}
                                        type={input.type} 
                                        placeholder={input.placeholder}
                                        value={values[input.name]}
                                        onChange={onChange}
                                    />
                                   
                                )
                            })
                        }
                        <button type="submit" className="btn">SIGN UP</button>
                        <p>Already have an account ? <Link to="/sign-in">Login here</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  

    )
}

export default SignUp