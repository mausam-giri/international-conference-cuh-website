import React from "react";
import notfoundLogo from "../assets/notfound.svg";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="relative min-h-max overflow-hidden bg-white">
      <div className="wrapper m-container m-auto">
        <div className="container z-10 flex items-center justify-between min-h-[90svh] px-6 pt-32 mx-auto md:pt-0">
          <div className="container relative flex flex-col-reverse items-center justify-between px-6 mx-auto lg:flex-row">
            <div className="w-full flex flex-col items-center md:items-start mb-16 text-center md:mb-8 lg:text-left">
              <h1 className="mt-12 font-sans text-5xl font-light text-center text-gray-700 lg:text-left lg:text-8xl md:mt-0">
                Sorry, this page isn&#x27;t available
              </h1>
              <Link to="/" className="px-2 py-2 text-center mt-16 text-lg transition duration-200 ease-in font-light rounded text-gray-200 bg-slate-600 w-36 hover:bg-slate-700 focus:outline-none">
                Go back home
              </Link>
              {/* <Button css={'max-w-36 mt-16 py-2 ml-auto mr-auto md:ml-0 md:mr-0'}/> */}
            </div>
            <div className="relative block w-full max-w-md mx-auto md:mt-0 lg:max-w-2xl">
              <img src={notfoundLogo} alt="not found" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
