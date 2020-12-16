import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';


const Navbar = () => {

    let btnStyleActive = 'inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-blue-700 rounded shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none';
    let btnStyleNorm = 'inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-indigo-500 rounded shadow ripple hover:shadow-lg hover:bg-indigo-600 focus:outline-none';

    return(
    <div className='m-6 space-x-3 space-y-3'>
        <NavLink to='/profile'>
            <button className={btnStyleNorm}>
                Profile
            </button>
        </NavLink>
        <NavLink activeStyle={{}} to='/tasks'>
            <button className={btnStyleNorm}>
                Tasks
            </button>
        </NavLink>
        <NavLink activeStyle={{}} to='/customers'>
            <button className={btnStyleNorm}>
                Customers
            </button>
        </NavLink>
        <NavLink activeStyle={{}} to='/outreach'>
            <button className={btnStyleNorm}>
                Outreach
            </button>
        </NavLink>
        <NavLink activeStyle={{}} to='/staff'>
            <button className={btnStyleNorm}>
                Staff
            </button>
        </NavLink>
        
    </div>
    );

}

export default Navbar;

