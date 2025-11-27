import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import SignInModal from "./Modal/SignInModal";

const Layout = () => {
  const [isSignInModalOpen, setIsSignInModalOpen] = useState(false);

  return (
    <>
      <Header setIsSignInModalOpen={setIsSignInModalOpen} />
      <main className="bg-[#dee4db] pt-[66px]">
        <Outlet />
      </main>
      <Footer />
      {isSignInModalOpen && <SignInModal setIsSignInModalOpen={setIsSignInModalOpen} />}
    </>
  );
};

export default Layout;
