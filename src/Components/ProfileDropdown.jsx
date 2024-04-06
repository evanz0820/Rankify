import { useState } from "react";
import { Link } from "react-router-dom";

export default function ProfileDropdown() {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className="relative">
      <button
        className="block h-9 w-9 rounded-full overflow-hidden"
        onClick={() => setOpenProfile((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-full w-full object-cover hover:text-emerald-500 text-gray-300 transition-colors ease-in duration-200"
        >
          <path
            fill-rule="evenodd"
            d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
      {openProfile && (
        <div className="absolute right-0 mt-2 w-36 py-2 bg-white text-gray-800 rounded-xl font-normal shadow-xl">
            <Link to="/profile" className="block px-4 py-2 hover:bg-emerald-600 hover:text-white">
                Profile
            </Link>
            <Link to="/" className="block px-4 py-2 hover:bg-emerald-600 hover:text-white">
                Sign out
            </Link>
        </div>
      )}
    </div>
  );
}
