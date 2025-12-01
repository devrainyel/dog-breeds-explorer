import React from "react";
import { Link } from "react-router-dom";

const Header = ({ setIsSignInModalOpen }) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-20 bg-amber-300">
      <nav className="flex items-center justify-between py-2 px-2 md:px-20 text-blue-950">
        <Link to="/" className="flex items-center">
          <img src="/dog-logo.svg" style={{ width: 50 }} alt="logo" />
          <span className="font-bold">Dog Breed Explorer</span>
        </Link>
        <ul className="flex gap-5 font-medium">
          <li>
            <Link to="/">Favorites</Link>
          </li>
          <li>
            <button onClick={() => setIsSignInModalOpen(true)}>Sign In</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
