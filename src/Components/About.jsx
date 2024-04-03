import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import BoxBasic from "./Box";
import Accordion from "./Accordion";
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
        <div className="color-intro">
        <h1>
            this is the about page
        </h1>
        <h3>this is some introduction</h3>
        </div>
        <Accordion className="accordion"></Accordion>
             
        <Footer></Footer>

        </div>
    )
}


export default About