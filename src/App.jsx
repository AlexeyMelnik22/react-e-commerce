import { useState } from 'react'
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import './scss/main.scss'

import {Route, Routes} from "react-router-dom";
import Catalog from "./Pages/Catalog.jsx";
import Home from "./Pages/Home.jsx";
import Product from "./Pages/Product.jsx";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <main className="page">
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/catalog" element={<Catalog/>}/>
                    <Route path="/catalog/:item" element={<Product/>}/>
                </Routes>
            </main>
            <Footer/>
        </div>
    )
}

export default App
