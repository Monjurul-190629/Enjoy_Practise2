import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About/About';
import MainLayout from '../Layout/MainLayout';
import Contact from '../Pages/Contact/Contact';

const AppRoutes:React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path = "/" element = {<MainLayout/>}>
                   <Route index element = {<Home/>}/>
                   <Route path = "about" element={<About/>} />
                   <Route path = "contact" element={<Contact/>} />
                </Route>
            </Routes>
        </div>
    );
};

export default AppRoutes;