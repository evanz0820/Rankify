// import React, { useEffect, useRef } from 'react';

// function Searchbar({ placeholder, data }) {
//     const inputRef = useRef(null);

//     useEffect(() => {
//         const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);
//         // Set any additional options for the autocomplete instance if needed

//         // Add event listener for place selection
//         autocomplete.addListener('place_changed', () => {
//             const selectedPlace = autocomplete.getPlace();
//             const placeID = selectedPlace.place_id;
            
//             // Do something with the selected place
//         });
//     }, []);

//     return (
//         <div className='search-bar w-1/2'>
//             <div className="searchInputs ">
//                 <input className="w-full"ref={inputRef} type="text" placeholder={placeholder} />
//                 {/* <div className="searchIcon"></div> */}
//             </div>
//             <div className="dataResult"></div>
//         </div>
//     );
// }

// export default Searchbar;


import React, { useEffect, useRef } from 'react';

function Searchbar({ placeholder, onPlaceIDChange }) {
    const inputRef = useRef(null);

    useEffect(() => {
        const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);

        autocomplete.addListener('place_changed', () => {
            const selectedPlace = autocomplete.getPlace();
            const placeID = selectedPlace.place_id;
            onPlaceIDChange(placeID); // Call the callback with placeID
        });
    }, [onPlaceIDChange]);

    return (
        <div className='search-bar w-1/2'>
            <div className="searchInputs ">
                <input className="w-full" ref={inputRef} type="text" placeholder={placeholder} />
                {/* <div className="searchIcon"></div> */}
            </div>
            <div className="dataResult"></div>
        </div>
    );
}

export default Searchbar;

