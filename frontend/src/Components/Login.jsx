import React, {useEffect,useState, useContext } from 'react';
import {Link, useNavigate} from "react-router-dom";
import Signup from "./Signup";
import Validation from "./LoginValidation";
import axios from "axios";
import Navbar from "./Navbar";

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
            navigate('/login')
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


    <div className="bg-blue-300 ">

      <Navbar />
      <div className="login-container flex items-center justify-center h-full">
        
        <form className="flex flex-col" action="" onSubmit={handleSubmit}>
          <h1 className="text-center">Log In form</h1>
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