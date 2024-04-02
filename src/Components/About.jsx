import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BoxBasic from "./Box";
import "./About.css"

function About () {
    return (
        <div>
        <div className="top-part">
           
        <Navbar/>
        <div className="text-color">
        <h1> Rankify connects people with great local businesses.</h1>
        </div>
        </div>
        <br></br>
        <div className="info-box">
            <BoxBasic></BoxBasic>
            <BoxBasic></BoxBasic>
            <BoxBasic></BoxBasic>
        </div>
             
        <Footer></Footer>

        </div>
    )
}


export default About