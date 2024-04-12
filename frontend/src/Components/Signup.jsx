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
                // console.log(res)
                navigate("/login")
            })
            .catch(err => console.log(err));
        }
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-[url('src/assets/login-image.jpg')] bg-center bg-cover bg-blend-overlay bg-fixed bg-black/45">
        <Navbar isTransparent={true} />
        <div className="relative flex flex-col m-6 rounded-3xl p-1 bg-gradient-to-b from-teal-300 to-transparent  md:flex-row md-space-y-0">
            <div className="flex flex-col md:w-[650px] md:h-[650px] justify-center p-16 rounded-[calc(1.5rem-1px)] bg-white">
            <h1 className="mb-3 text-4xl font-bold text-center">Create a Rankify Account</h1>
                <form className="flex flex-col" action="" onSubmit={handleSubmit}>
                    
                    <div className="py-4">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium">Name</label>
                        <input type="name" placeholder="Enter Name"
                        name="name"
                        onChange={handleInput}
                        className="error-message border border-gray-300 rounded px-3 py-2 w-full"
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>

                    <div className="pb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Email</label>
                        <input type="email" placeholder="Enter Email" 
                        name="email"
                        onChange={handleInput}
                        className="error-message border border-gray-300 rounded px-3 py-2 w-full"
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>

                    <div className="pb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium">Password</label>
                        <input type="password" placeholder="Enter Password"
                        name="password"
                        onChange={handleInput}
                        className="error-message border border-gray-300 rounded px-3 py-2 w-full"
                        />
                        {errors.password && <span className="error-message">{errors.password}</span>}
                    </div>

                    <button  
                    className="border-2 border-black rounded px-4 py-2 mb-2 hover:bg-black hover:text-white text-center transition-colors ease-in duration-100" 
                    type="submit"
                    >
                        Sign up
                    </button>
                    {/* If not registered */}
                    <p className="pb-2 font-light text-gray-700">
                    You agree to our terms and policies
                    </p>
                    <p className="pt-4 pb-2 font-normal text-gray-700">
                    Already have an account?
                    </p>
                    <Link 
                    className="border-2 border-black rounded px-4 py-2 mb-2 hover:bg-black hover:text-white text-center transition-colors ease-in duration-100" to="/login"
                    >
                        Go to login
                    </Link>
                </form>
            </div>
            
        </div>
    </div>
  )
}

export default Signup