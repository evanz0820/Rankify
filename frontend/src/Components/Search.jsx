// import React from "react";
// import Navbar from "./Navbar"
// import Searchbar from "./Searchbar";

// function Search(){


//     return(
//         <div className="Search-Container">
//             <Navbar/>
//             <h1>Welcome to the Search page</h1>

//             <h1>Results for:</h1> {/* Display placeID here */}
            
//         </div>


//     )
// }

// export default Search


import React from "react";
import Navbar from "./Navbar";
import { useParams } from "react-router-dom";

function Search() {
    const { placeID } = useParams();

    return(
        <div className="Search-Container">
            <Navbar/>
            <h1>Welcome to the Search page</h1>
            <h1>Results for: {placeID}</h1> {/* Display placeID here */}
        </div>
    )
}

export default Search;
