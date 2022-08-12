import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import FormInput from './FormInput'
import "../App.css"

const SignIn = () =>{
    const [error,setError] = useState("");

    const [values,setValues] = useState({
        email:"",
        password:"",
    })

    const inputs =[
        {
            id:1,
            label:"Email address",
            name:"email",
            type:"email",
            placeholder:"Enter email address",
            errorMessage:"Email address is invalid. ",
            required:true,
        },
        {
            id:2,
            label:"Password",
            name:"password",
            type:"password",
            placeholder:"Enter user password",
            errorMessage:"Password should be between 8 to 20 characters long. ",
            required:true,
            pattern:"^[A-Za-z0-9]{8,20}",
        }
    ]

    const onChange = (e) =>{
        setValues({...values,[e.target.name]:e.target.value})
    }

    const handleSubmit = (e) =>{
        setError(false)
        e.preventDefault();  
        let users = JSON.parse(localStorage.getItem('users'))
        let user = users && users.filter(user => user.email === values.email)

        if(users && users.some(user => user.email === values.email) && users.some(user => user.password === values.password)){
            localStorage.setItem('LoggedIn', JSON.stringify({username:user.username,email:values.email,password:values.password})); 
            window.location.reload(false);
        }else{
            setError("Invalid email and password combination.")
        }

    }
    // console.log(values)
    return (
        <div className="content">
        <div className="row row2">   
            <div className="product-col4">
                <img src={"./images/log.svg"} alt="sign-in"/>
            </div>
            <div className="sign-col">
                <div className="form-box">
                    <h2>login</h2>
                    <div id="login-error"></div>
                    <form id="signIn" onSubmit={handleSubmit}>
                        <span className="e-span">{error}</span>
                        {
                            inputs && inputs.map((input)=>{
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
                        <button type="submit" className="btn">LOGIN</button>
                        <p>Don't have an account ? <Link to="/sign-up">Register here</Link></p>
                    </form>
                </div>
            </div>
        </div>
    </div>
        
)
}

export default SignIn