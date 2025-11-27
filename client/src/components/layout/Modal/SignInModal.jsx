import React from "react";
import { X } from "lucide-react";

const SignInModal = ({ setIsSignInModalOpen }) => {
  return (
    <div className="fixed inset-0 backdrop-blur-sm flex-center">
      <div className="relative p-4 bg-amber-500 w-full max-w-xl">
        <div className="flex-center flex-col">
          <img src="./dog-logo.svg" className="w-30" alt="logo" />
          <h2 className="text-4xl mb-2">Sign In Now</h2>
          <form className="w-80">
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="input">Email</label>
              <input
                id="email-input"
                className="outline-none bg-white rounded-md p-2 focus:border-amber-500"
                type="text"
                placeholder="Your email address"
              />
              <label htmlFor="input">Password</label>
              <input
                id="password-input"
                className="outline-none bg-white rounded-md p-2"
                type="password"
                placeholder="Your password"
              />
              <a href="/" className="text-xs text-slate-800">
                Forgot Password?
              </a>
              <button
                type="submit"
                className="rounded-lg bg-blue-950 hover:bg-blue-900 text-white py-5 mt-5"
              >
                Sign In
              </button>
              <p class="text-sm mt-4 text-center">
                Don't have an account?
                <a href="/register" class="text-slate-800 hover:text-blue-950 ml-1">
                  Register now
                </a>
              </p>
            </div>
          </form>
        </div>
        <button
          onClick={() => setIsSignInModalOpen(false)}
          className="absolute top-2 right-2 hover:scale-125"
        >
          <X size={30} />
        </button>
      </div>
    </div>
  );
};

export default SignInModal;
