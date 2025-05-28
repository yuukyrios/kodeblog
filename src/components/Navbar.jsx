import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
    <div className='container m-auto'>
      <div className="text-lg font-bold">
        <img
          src="./logo.svg"  // Your logo image URL
          alt="Logo"
          className="h-10"
        />
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
