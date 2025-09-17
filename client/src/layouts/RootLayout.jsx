import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar (fixed on top for larger screens if needed) */}
      <header className="w-full">
        <Navbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow w-full px-3   py-4">
        <div className=" mx-auto">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full">
        <Footer />
      </footer>
    </div>
  );
};

export default RootLayout;
