import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';


const NavbarLanding = () => {

    return(
    <div class="hidden md:flex items-center justify-center">
        <NavLink to='/login'>
            <a href="#" className="mr-5 text-lg font-medium text-true-gray-800 hover:text-cool-gray-700 transition duration-150 ease-in-out">Login</a>
        </NavLink>
        <NavLink to='/createaccount'>
            <button className="px-6 py-3 rounded-3xl font-medium bg-gradient-to-b from-gray-900 to-black text-white outline-none focus:outline-none hover:shadow-md hover:from-true-gray-900 transition duration-200 ease-in-out">Create Account</button>
        </NavLink>
    </div>
    );

}

export default NavbarLanding;

