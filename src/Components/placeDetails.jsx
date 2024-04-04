import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

function PlaceDetails() {
  const [placeId, setPlaceId] = useState({ useParams }); // Replace with your place ID
  const [placeDetails, setPlaceDetails] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);

  const API_KEY = AIzaSyBS9ofn_uM3OOpEouACZXTvNvp0dLiZfHc; // Replace with your API key

  const fetchPlaceDetails = async () => {
    try {
      const response = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json?placeid={ useParams }&key=AIzaSyBS9ofn_uM3OOpEouACZXTvNvp0dLiZfHc&fields=formatted_address,name,rating`
      );
      setPlaceDetails(response.data.result);
      setErrorMessage(null);
    } catch (error) {pl
      setErrorMessage(error.message);
    }
  };

  useEffect(() => {
    fetchPlaceDetails();
  }, [placeId]); // Call fetchPlaceDetails on placeId change

  if (errorMessage) {
    return <div>Error: {errorMessage}</div>;
  }

  if (!placeDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{placeDetails.name}</h2>
      <p>{placeDetails.formatted_address}</p>
      {placeDetails.rating && <p>Rating: {placeDetails.rating}</p>}
    </div>
  );
}

export default PlaceDetails;
