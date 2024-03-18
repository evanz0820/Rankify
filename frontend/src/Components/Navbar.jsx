import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="bg-red-400 p-4 flex justify-between items-center">
      <h1 className="text-black text-2xl">Rankify</h1>
      <div className="flex">
        <Link to="/" className="text-black mr-4">Home</Link>
        <Link to="/about" className="text-black">About</Link>
      </div>
    </div>
  );
}

export default Navbar;
