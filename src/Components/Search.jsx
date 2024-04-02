import React from "react";
import Navbar from "./Navbar"
import "./Search.css"
import Footer from "./Footer";
import Searchbar from "./Searchbar";


function Search(){
    return(
        <div className = "Search-Container">
            <Navbar/>
            <h1>Welcome to the Search page</h1>

            <h1>Results for: 
            </h1>
            <Searchbar></Searchbar>
            <Footer></Footer>
        </div>


    )
}

export default Search