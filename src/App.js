import React from "react";
import Head from "./Head";
import Footer from "./Footer";
import Home from "./main/Home";
import About from "./main/About";
import Services from "./main/Services";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";

export default function App () {
    return(
        <div>
            <Head />
            <Router>
                <nav className="mainNav">
                    <Link to="/">
                        Home!!! 
                    </Link>

                    <Link to="/about">
                        About??? 
                    </Link>

                    <Link to="/services">
                        Services...
                    </Link>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/about" element={<About />}/>
                    <Route path="/services" element={<Services/>}/>
                </Routes>
            </Router>
            <Footer />
        </div>
    )
}
        // <div>
        //     <Head />
        //     <Footer />
        // </div>