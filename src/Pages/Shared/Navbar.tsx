import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, SunMoon } from 'lucide-react';
import { useThemeStore } from '../../store/useThemeStore';

const Navbar: React.FC = () => {

    const {theme, toggleTheme} = useThemeStore();

    const navLink = <>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
        <li>
            <Link to="/user">User</Link>
        </li>
        <li>
            <Link to = "/editor">Editor</Link>
        </li>
        <li>
            <button onClick={() => toggleTheme()} className='py-1'>
                {theme === 'light' ? <Sun/> : <SunMoon/>}
            </button>
        </li>
        <li>
            <Link to = "/registration">Registration</Link>
        </li>
    </>

    // For theme


    return (
        <div>
            <ul className='text-xl flex justify-center gap-4 py-5'>
                {navLink}
            </ul>
        </div>
    );
};

export default Navbar;