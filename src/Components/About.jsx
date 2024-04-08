import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Accordion from "./Accordion";
import "./About.css"

function About () {
    return (
        <div>
        <div className="top-part">
           
        <Navbar/>
        <div className="text-color">
        <h1 className="page-title"> Rankify connects<br></br> people with great local<br></br> <b className="bold">businesses. </b></h1>
        </div>
        </div>
        <br></br>
        <div className="color-intro">
        <h1 className="title-text">
            Discover Rankify: Learn More About Us
        </h1>
        <p className="p-text"> <b>Embark on a journey with Rankify and experience the power of community-driven insights. Whether you're a consumer seeking reliable reviews or a business eager to engage with your audience, Rankify provides the platform for meaningful connections and informed decisions. Join us in shaping the future of consumer experiences, where every voice is valued, and transparency reigns supreme. Together, let's elevate the way we interact, review, and connect. </b></p>
        {/* <h3>this is some introduction</h3> */}
        </div>
        <Accordion className="accordion"></Accordion>
        <Footer></Footer>

        </div>
    )
}


export default About