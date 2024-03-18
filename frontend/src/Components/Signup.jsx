import React, {useState} from 'react'
import {Link, useNavigate} from "react-router-dom"
import Validation from "./SignupValidation";
import axios from "axios";
import Navbar from "./Navbar";

function Signup() {
    const [values, setValues] = useState({
        name: "",
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
        if(errors.name === "" && errors.email === "" && errors.password === ""){
            axios.post("http://localhost:8081/signup", values)
            .then(res => {
                navigate("/")
            })
            .catch(err => console.log(err));
        }
    }
  return (
    <div>
        <Navbar />
        <div className="signup-container">
            <h1>Sign Up form</h1>
            <form action="" onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name"><strong>Name</strong></label>
                    <input type="name" placeholder="Enter Name"
                    name="name"
                    onChange={handleInput}
                    className="error-message"
                     />
                     {errors.name && <span className="error-message">{errors.name}</span>}
                </div>

                <div>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder="Enter Email" 
                    name="email"
                    onChange={handleInput}
                    className="error-message"
                    />
                    {errors.email && <span className="error-message">{errors.email}</span>}
                </div>

                <div>
                    <label htmlFor="email"><strong>Password</strong></label>
                    <input type="password" placeholder="Enter Password"
                     name="password"
                     onChange={handleInput}
                     className="error-message"
                    />
                    {errors.password && <span className="error-message">{errors.password}</span>}
                </div>

                <button type="submit"><strong>Sign up Button</strong></button>
                {/* If not registered */}
                <p>You agree to our terms and policies</p>
                <Link to="/">Login</Link>
            </form>
        </div>
    </div>
  )
}

export default Signup