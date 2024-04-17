import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Components/Login.jsx"
import Search from  "./Components/Search.jsx"
import Signup from "./Components/Signup.jsx"
import HomeLogin from "./Components/HomeLogin.jsx"
import Create from "./pages/Create.jsx"
import LocationDetails from './Components/LocationDetails.jsx'
import ViewEdit from './pages/ViewEdit.jsx';
import EditReview from './pages/EditReview.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <BrowserRouter>
          <Routes>
            <Route path="/" element={<App/>}></Route>
            <Route path="/search/:placeID" element={<Search />} /> {/* Pass placeID as URL parameter */}
            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/homelogin" element={<HomeLogin/>}></Route>
            <Route path="/login" element={<Login />} />
            <Route path="/location/:placeID" element={<LocationDetails />} />
            {/* First CRUD */}
            <Route path="/create" element={<Create />}></Route>
            <Route path="view" element={<ViewEdit/>}/>

            <Route path="/edit-review/:reviewID" element={<EditReview />} />
            
          </Routes>
    </BrowserRouter>
  
    {/* <App /> */}
  </React.StrictMode>,
)