import react from 'react'
import "./Navbar.css"


function Navbar(){


    return(
        <div className="Navbar">

            <h1 className="R-logo">Rankify</h1>

            <div className="nav-container">
                <h1 className="navbar-item">Home</h1>
                <h1 className="navbar-item">About</h1>
                <h1 className="navbar-item">Login</h1>

            </div>
            
            
        </div>
    )
}

export default Navbar