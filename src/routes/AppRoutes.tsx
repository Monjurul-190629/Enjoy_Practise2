import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About/About';
import MainLayout from '../Layout/MainLayout';
import Contact from '../Pages/Contact/Contact';
import User from '../Pages/User/User';
import Editor from '@/Pages/Editor/Editor';
import Registration from '@/Pages/Registration/Registration';

const AppRoutes:React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path = "/" element = {<MainLayout/>}>
                   <Route index element = {<Home/>}/>
                   <Route path = "about" element={<About/>} />
                   <Route path = "contact" element={<Contact/>} />
                   <Route path = "user" element = {<User/>} />
                   <Route path = "/editor" element = {<Editor/>} />
                   <Route path='/registration' element = {<Registration/>} />
                </Route>
            </Routes>
        </div>
    );
};

export default AppRoutes;