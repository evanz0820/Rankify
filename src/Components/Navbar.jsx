import Rreact from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';


function Navbar(){


    return(
        <div className="Navbar">

            <h1 className="R-logo">Rankify</h1>

            <div className="nav-container">
                <Link to="/" className="navbar-item">Home</Link>
                <Link to="/about" className="navbar-item">About</Link>
                <Link to="/login" className="navbar-item">Login</Link>

            </div>
            
            
        </div>
    )
}

export default Navbar