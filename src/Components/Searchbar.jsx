import React, { useEffect, useRef } from 'react';

function Searchbar({ placeholder, data }) {
    const inputRef = useRef(null);

    useEffect(() => {
        const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);
        // Set any additional options for the autocomplete instance if needed

        // Add event listener for place selection
        autocomplete.addListener('place_changed', () => {
            const selectedPlace = autocomplete.getPlace();
            // Do something with the selected place
        });
    }, []);

    return (
        <div className='search-bar'>
            <div className="searchInputs">
                <input ref={inputRef} type="text" placeholder={placeholder} />
                <div className="searchIcon"></div>
            </div>
            <div className="dataResult"></div>
        </div>
    );
}

export default Searchbar;