import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from "./Navbar"
function HomeLogin() {

  const [name, setName] = useState('')
  const navigate = useNavigate();

  axios.defaults.withCredentials = true;

  useEffect(()=> {
    axios.get('http://localhost:8081/homelogin')
    .then(res => {
      if(res.data.valid){
        setName(res.data.username);
      } else{
        navigate('/')
      }
    })
    .catch(err => console.log(err))
  },[])
  // function to handle logout event
  const handleLogout = () => {
    axios.post('http://localhost:8081/logout')
        .then(res => {
            if (res.data.success) {
                navigate('/');
            } else {
                console.log("Logout failed");
            }
        })
        .catch(err => console.log(err));
  };
  return (
    <div >
      <Navbar/>
      <div className="home-container">
        <h1>Welcome {name}! You just Logged in!</h1>
        <button onClick={handleLogout}>Logout</button>
      </div>
      
    </div>
  )
}
export default HomeLogin;