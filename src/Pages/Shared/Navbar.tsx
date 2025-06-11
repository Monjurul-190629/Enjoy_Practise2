import React from 'react';
import { Link } from 'react-router-dom';

const Navbar:React.FC = () => {

    const navLink = <>
    <li>
        <Link to = "/">Home</Link>
    </li>
    <li>
        <Link to = "/about">About</Link>
    </li>
    <li>
        <Link to = "/contact">Contact</Link>
    </li>
    </>

    return (
        <div>
            <ul className='text-xl flex justify-center gap-4'>
                {navLink}
            </ul>
        </div>
    );
};

export default Navbar;