
import React from 'react';
import NavbarLanding from './../components/NavbarLanding';
import {NavLink} from 'react-router-dom';

const LandingPage = () => {

    return(
        <div className="min-h-screen min-w-full bg-gray-100 flex flex-col justify-center p-10">
        <div className="relative w-full max-w-full lg:max-w-6xl xl:max-w-screen-2xl mx-auto">
          <div className="absolute inset-0 -mr-3.5 bg-gradient-to-r from-red-100 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:rotate-3 sm:rounded-3xl"></div>
          <div className="relative bg-white shadow-lg sm:rounded-3xl">
            
            <div className="flex items-center justify-start pt-6 pl-6">
            </div>
            
            <div className="px-20 py-6">
              
              <div className="flex items-center justify-between">
                <div className="flex items-center justify-center">
                  <div className="flex items-center justify-center text-3xl font-bold text-true-gray-800">
                    <img src='/lightning-svgrepo-com.svg'/>
                    OH
                  </div>   
                </div>
                <NavbarLanding/>
              </div>

              <div className="lg:2/6 xl:w-2/4 mt-20 lg:mt-40 lg:ml-16 text-left">
                <div className="text-6xl font-semibold text-gray-900 leading-none">Make managing your organizations easy</div>
                <div className="mt-6 text-xl font-light text-true-gray-500 antialiased">Org-Helper provides one unified portal to create and run organizations, without any hassle.</div>
                <button className="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out">
                  About
                </button>
              </div>
              <div className="mt-12 lg:mt-32 lg:ml-20 text-left">
                <NavLink to="#">
                    <bottom type="button" className="flex items-center justify-center w-12 h-12 rounded-full bg-cool-gray-100 text-gray-800 animate-bounce hover:text-gray-900 hover:bg-cool-gray-50 transition duration-300 ease-in-out cursor-pointer">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                        </svg>
                    </bottom>
                </NavLink>
              </div>
    
            </div>
          </div>
        </div>
      </div>
    );

}

export default LandingPage;