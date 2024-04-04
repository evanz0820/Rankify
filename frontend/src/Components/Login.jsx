<<<<<<< HEAD
import React from "react";
import Navbar from "./Navbar";



function Login(){



    return(
        <div className = "Login-container">
            <Navbar/>
            <h1>Welcome to the Login</h1>
        </div>
        
    )
}

export default Login;
=======
import React, {useEffect,useState, useContext } from 'react'
import {Link, useNavigate} from "react-router-dom"
import Signup from "./Signup"
import Validation from "./LoginValidation"
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

    axios.defaults.withCredentials = true;

    // So this basically makes it so that when a user is logged in, and they try to go to the login, they will be taken back to homelogin instead
    useEffect(()=> {
        axios.get('http://localhost:8081/homelogin')
        .then(res => {
          if(res.data.valid){
            navigate('/homelogin')
          } else{
            navigate('/')
          }
        })
        .catch(err => console.log(err))
      },[])

    const handleSubmit = (event) => {
        event.preventDefault();
        setErrors(Validation(values));
        if(errors.email === "" && errors.password === ""){
            axios.post("http://localhost:8081/login", values)
            .then(res => {
                // if(res.data == "Success"){
                if(res.data.Login){
                    // console.log(res)
                    navigate("/homelogin");
                } else{
                    alert("No record Exists")
                }
            })
            .catch(err => console.log(err));
        }
    }


  return (
    // <div className="bg-blue-300 flex-col w-full">
    //     <div className="login-container flex-col">
    //         <h1>Log In form</h1>
    //         <form className="flex-col" action="" onSubmit={handleSubmit}>
    //             <div>
    //                 <label htmlFor="email"><strong>Email</strong></label>
    //                 <input type="email" placeholder="Enter Email" name="email" 
    //                 onChange={handleInput} />
    //                 {errors.email && <span className="error-message">{errors.email}</span>}
    //             </div>
                

    //             <div>
    //                 <label htmlFor="email"><strong>Password</strong></label>
    //                 <input type="password" placeholder="Enter Password" name="password" 
    //                 onChange={handleInput}/>
    //                 {errors.password && <span className="error-message">{errors.password}</span>}
    //             </div>
                
    //             <button className=" border-2 border-black rounded" type="submit"><strong>Log in</strong></button>
    //             {/* If not registered */}
    //             <p>You agree to our terms and policies</p>
    //             <Link className=" border-2 border-black rounded" to="signup">Create Account</Link>
    //         </form>
    //     </div>
    // </div>

    <div className="bg-blue-300 flex items-center justify-center h-full">
      <div className="login-container">
        <h1 className="text-center">Log In form</h1>
        <form className="flex flex-col" action="" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={handleInput}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={handleInput}
              className="border border-gray-300 rounded px-3 py-2 w-full"
            />
            {errors.password && <span className="error-message">{errors.password}</span>}
          </div>

          <button className="border-2 border-black rounded px-4 py-2 mb-2" type="submit">
            <strong>Log in</strong>
          </button>
          {/* If not registered */}
          <p>You agree to our terms and policies</p>
          <Link className="border-2 border-black rounded" to="/signup">
            Create Account
          </Link>
        </form>
      </div>
    </div>
  )
}

export default Login
>>>>>>> parent of 0a3437a (moved the entire frontend folder out)
