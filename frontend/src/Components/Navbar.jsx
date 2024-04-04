import react from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';


function Navbar(){


    return(
        <div className="Navbar">

            <h1 className="R-logo">Rankify</h1>

            <div className="nav-container">
                <Link to="/" className="navbar-item">Home</Link>
                <h1 className="navbar-item">About</h1>
                <Link to="/login" className="navbar-item">Login</Link>

            </div>
            
            
        </div>
    )
}

export default Navbar