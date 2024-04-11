import React, { useEffect, useRef } from 'react';

function Searchbar({ placeholder, onPlaceIDChange }) {
    const inputRef = useRef(null);

    useEffect(() => {
        const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current);

        autocomplete.addListener('place_changed', () => {
            const selectedPlace = autocomplete.getPlace();
            console.log(selectedPlace);
            const placeID = selectedPlace.place_id;
            onPlaceIDChange(placeID); // Call the callback with placeID
        });
    }, [onPlaceIDChange]);

    return (
        <div className='search-bar w-1/2'>
            <div className="searchInputs ">
                <input className="flex min-w-[150px] w-1/3 p-2 bg-white rounded-full shadow-md border-2 absolute" ref={inputRef} type="text" placeholder={placeholder} />

            </div>
            <div className="dataResult"></div>
        </div>
    );
}

export default Searchbar;

