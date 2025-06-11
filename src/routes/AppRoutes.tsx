import React from 'react';
import { Route, Routes } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home';
import About from '../Pages/About/About';

const AppRoutes:React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path = "/" element = {<App/>}>
                   <Route index element = {<Home/>}/>
                   <Route path = "about" element={<About/>} />
                </Route>
            </Routes>
        </div>
    );
};

export default AppRoutes;