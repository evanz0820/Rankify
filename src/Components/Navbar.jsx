import react from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar bg-zinc-900">
      <h1 className="R-logo text-emerald-600 drop-shadow font-bold font-xl">
        Rankify
      </h1>
        <div className="search-bar justify-center">
          <input
            class="input-bar"
            type="text"
            placeholder="Search..."
            // value={searchTerm}
            // onChange={handleInputChange}
          />
          {/* <img src={searchIcon} alt='Search' className='search-icon' /> */}
          <Link to="/search">
            <button className="text-white bg-emerald-600 hover:bg-emerald-500 rounded-full p-1">Search!</button>
          </Link>
        </div>

      <div className="nav-container text-white space-x-2">
        <Link
          to="/"
          className="navbar-item rounded-full hover:bg-neutral-800 px-3 mx-3"
        >
          Home
        </Link>
        <Link
          to="/AboutUs"
          className="navbar-item rounded-full hover:bg-neutral-800 px-3 mx-3"
        >
          About Us
        </Link>
        <Link
          to="/login"
          className="navbar-item rounded-full hover:bg-neutral-800 px-3 mx-3"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
