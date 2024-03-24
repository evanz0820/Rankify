import react from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ isTransparent = false }) {
  return (
    <nav
      className={`flex items-center justify-between md:justify-center h-20 relative md:space-x-36 ${
        isTransparent ? "bg-transparent" : "bg-white"
      }`}
    >
      {/* Logo */}
      <Link to="/">
        <div className="flex items-center flex-shrink-0 text-emerald-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 ml-3 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
            />
          </svg>
          <span className="font-semibold text-2xl tracking-tight">Rankify</span>
        </div>
      </Link>

      <div className="flex min-w-[260px] w-1/3 p-2 bg-white rounded-full shadow-md border-2 place-self-center">
        <div className="flex grow items-center rounded-full">
          <input
            className="w-full px-4 py-2 focus:outline-none text-black"
            type="text"
            placeholder="Search..."
            // value={searchTerm}
            // onChange={handleInputChange}
          />
          {/* <img src={searchIcon} alt='Search' className='search-icon' /> */}
          <Link to="/search">
            <button className="flex-shrink-0 px-2 py-2 bg-emerald-500 text-white font-semibold rounded-full hover:bg-emerald-400 transition-colors focus:outline-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center space-x-2 font-semibold mr-3">
        {/* placeholder nav items; change later */}
        <Link
          to="/AboutUs"
          className="rounded-full px-3 py-2 text-sm hidden sm:inline truncate"
        >
          Write a Review
        </Link>
        {/* TODO: Login will turn into profile icon when logged in, will route to their profile page */}
        <Link
          to="/login"
          className="bg-black hover:bg-neutral-700 transition-colors rounded-full px-5 py-2 text-lg text-white tracking-wide"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
