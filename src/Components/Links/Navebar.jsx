import React from 'react'
import { Route, Routes } from "react-router-dom";
import './Nav.css'
import Generalhead from '../navebar/General header/Generalhead';
import Top from '../navebar/Pages/Top header/Top'
import Secondtop from '../navebar/Pages/Top header/Secondtop'
import Home from '../navebar/Pages/Home/Home';
import Buy from '../navebar/Pages/Buy/Buy';
import Blog from '../navebar/Pages/Blog/Blog';
import Shop from '../navebar/Pages/Shop/Shop';
import Navelink from './Navelink';
import Id from '../navebar/Pages/Shop/Id';
import Cart from '../navebar/Pages/Shop/Cart';

const Navebar = () => {
    return (
        <>
            <div className='navi'>
                <Top />
                <Secondtop />
                <Generalhead />
                <Navelink />
                <Routes>
                    <Route path="/projects" />
                    <Route path="/projects/:id" element={<Id/>} />
                    <Route path="/cart" element={<Cart/>} />
                    <Route element={<><Home/></>} path="/" />
                    <Route element={<><Shop/></>} path="/shop" />
                    <Route element={<><Blog/></>} path="/blog" />
                    <Route element={<><Buy/></>} path="/buy" />
                </Routes>
            </div>
        </>
    )
}

export default Navebar