import React from 'react';
import {NavLink} from 'react-router-dom';



const LoginPage = () => {

    return(
    
        <>
        <div class="grid min-h-screen place-items-center">
        <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
            <h1 class="text-xl font-semibold">Welcome Back! 😊</h1>
            <br/>
            <form class="mt-6">
            <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Account E-mail</label>
            <input id="email" type="email" name="email" placeholder="spark@xyz.com" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
            <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
            <input id="password" type="password" name="password" placeholder="********" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
            <NavLink to='/home'>
                <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                    Complete Profile
                </button>
            </NavLink>
            </form>
        </div>
        </div>
        </>

    );


}

export default LoginPage;
