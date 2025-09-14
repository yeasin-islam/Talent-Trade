import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/shared/Navbar/Navbar';
import Footer from '../components/shared/Footer/Footer';


const RootLayout = () => {
    return (
        <>
          <Navbar></Navbar>
           <Outlet></Outlet> 
           <Footer></Footer>
        </>
    );
};

export default RootLayout;