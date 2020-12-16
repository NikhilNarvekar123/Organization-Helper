import React from 'react';
import {NavLink} from 'react-router-dom';


const CreateAccountPage = () => {

    return(
        <>
        
        <div class="grid min-h-screen place-items-center">
        <div class="w-11/12 p-12 bg-white sm:w-8/12 md:w-1/2 lg:w-5/12">
            <h1 class="text-xl font-semibold">Hi! 👋, <span class="font-normal">please tell us more about your organization!</span></h1>
            <br/>
            <form class="mt-6">
            
            <div class="flex justify-between gap-3">
                <span class="w-1/2">
                <label for="firstname" class="block text-xs font-semibold text-gray-600 uppercase">First Name</label>
                <input id="firstname" type="text" name="firstname" placeholder="Joe" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                </span>
                <span class="w-1/2">
                <label for="lastname" class="block text-xs font-semibold text-gray-600 uppercase">Last Name</label>
                <input id="lastname" type="text" name="lastname" placeholder="Henry" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
                </span>
            </div>
            
            <span class="w-1/2">
                <label for="orgname" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Organization Name</label>
                <input id="orgname" type="text" name="lastname" placeholder="Spark Nonprofit" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
            </span>
            
            <label for="email" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">E-mail</label>
            <input id="email" type="email" name="email" placeholder="john.doe@company.com" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
            <label for="password" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Password</label>
            <input id="password" type="password" name="password" placeholder="********" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
            <label for="password-confirm" class="block mt-2 text-xs font-semibold text-gray-600 uppercase">Confirm password</label>
            <input id="password-confirm" type="password" name="password-confirm" placeholder="********" class="block w-full p-3 mt-2 text-gray-700 bg-gray-200 appearance-none focus:outline-none focus:bg-gray-300 focus:shadow-inner" required />
            <NavLink to='/home'>
                <button type="submit" class="w-full py-3 mt-6 font-medium tracking-widest text-white uppercase bg-black shadow-lg focus:outline-none hover:bg-gray-900 hover:shadow-none">
                    Complete Profile
                </button>
            </NavLink>
            <p class="flex justify-between inline-block mt-4 text-xs text-gray-500 cursor-pointer hover:text-black">Already registered?</p>
            </form>
        </div>
        </div>

        </>
    );


}

export default CreateAccountPage;