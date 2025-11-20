import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <Header />
      <main className='bg-[#dee4db] pt-[66px]'>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
