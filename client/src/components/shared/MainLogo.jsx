import React from 'react';
import logo from "/favicon.png";
import { Link } from 'react-router';

const MainLogo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img src={logo} alt="Logo" className="h-10 md:h-14" />
      <div className=''>
        <h1 className="md:text-2xl text-[19px] font-extrabold text-primary mt-1">
          Talent Trade
        </h1>
        <p className='md:font-semibold md:text-sm text-[11px] -mt-2'>Connect, Learn, Grow</p>
      </div>
    </Link>
  );
};

export default MainLogo;