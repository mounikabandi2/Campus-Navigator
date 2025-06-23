import React from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Map from "./projectspace.jsx";
import Contact from "./contact.jsx";
import HomePage from "./Maphome.jsx";
import Findmap from "./Findmap.jsx";
import CampusNavigator from "../CampusNavigator.jsx";
import CardsPage from"./places.jsx";


const Mainpage = () => {
    return (
        <>
            <BrowserRouter>

                <Routes>
                    <Route path="/" element={<Map />} >
                        <Route index element={<HomePage />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route path="/findmap" element={<CampusNavigator/>} />
                        <Route path="/places" element={<CardsPage/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>


        </>
    )
}
export default Mainpage;