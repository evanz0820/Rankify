import React, {useState, useContext } from 'react'
import {Link, useNavigate} from "react-router-dom"
import Signup from "./Signup"
import Validation from "./LoginValidation"
import "./Login.css"
import axios from "axios";


function Login() {
    const [values, setValues] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const [errors,setErrors] = useState({})

    

    const handleInput = (event) => {
        setValues(prev => ({...prev, [event.target.name]:event.target.value}))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email === "" && errors.password === ""){
            axios.post("http://localhost:8081/login", values)
            .then(res => {
                if(res.data == "Success"){
                    navigate("/homelogin");
                } else{
                    alert("No record Exists")
                }
            })
            .catch(err => console.log(err));
        }
    }


  return (
    <div>
        <div className="login-container">
            <h1>Log In form</h1>
            <form action="" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder="Enter Email" name="email" 
                    onChange={handleInput} />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>
                

                <div>
                    <label htmlFor="email"><strong>Password</strong></label>
                    <input type="password" placeholder="Enter Password" name="password" 
                    onChange={handleInput}/>
                    {errors.password && <span className="error-message">{errors.password}</span>}
                </div>
                
                <button type="submit"><strong>Log in</strong></button>
                {/* If not registered */}
                <p>You agree to our terms and policies</p>
                <Link to="signup">Create Account</Link>
            </form>
        </div>
    </div>
  )
}

export default Login