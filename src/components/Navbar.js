import React from 'react';
import {Link} from 'react-router-dom';


const Navbar = () => {

    return(
    <div>
        <Link to='/profile'>
            <button>Profile</button>
        </Link>
        <Link to='/tasks'>
            <button>Tasks</button>
        </Link>
        <Link to='/customers'>
            <button>Customers</button>
        </Link>
        <Link to='/outreach'>
            <button>Outreach</button>
        </Link>
        <Link to='/staff'>
            <button>Profile</button>
        </Link>
        
    </div>
    );

}

export default Navbar;

