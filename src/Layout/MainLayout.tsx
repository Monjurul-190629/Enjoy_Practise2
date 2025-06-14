import React from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet } from 'react-router-dom';
import { useThemeStore } from '../store/useThemeStore';

const MainLayout : React.FC = () => {
    const {theme} = useThemeStore();
    return (
        <div className={theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;