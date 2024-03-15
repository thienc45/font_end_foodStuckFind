import React, { Component, useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const App = () => {
  const [foodTrucks, setFoodTrucks] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // eslint-disable-next-line
  const [searchLocation, setSearchLocation] = useState("");

  // eslint-disable-next-line
  const [mapCenter, setMapCenter] = useState({ lat: 37.7749, lng: -122.4194 });

  useEffect(() => {
    // fetch("http://localhost:8081/api/food-trucks")
    fetch("http://54.251.142.187:8081/api/food-trucks")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setFoodTrucks(data);
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  }, []);

  

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    fetch(
      `http://54.251.142.187:8081/api/food-trucks/search?locationDescription=${searchQuery}`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setFoodTrucks(data);
      })
      .catch((error) => {
        console.error("There was a problem with your fetch operation:", error);
      });
  };

  const mapStyles = {
    width: "50%",
    height: "100%",
  };

  const inputStyle = {
    width: "300px",
    height: "40px",
    fontSize: "16px",
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  return (
    <div className="App" >
      <header className="App-header">
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchInputChange}
          placeholder="Search location..."
          style={inputStyle}
        />
        <button onClick={handleSearch}>Search</button>
      </header>
      <div>
        <div className="container">
          <div className="list">
            {foodTrucks.map((foodTruck) => (
              <div key={foodTruck.locationid}>
                <h3>{foodTruck.applicant}</h3>
                <p>{foodTruck.locationdescription}</p>
                <p>{foodTruck.address}</p>
                <p>{foodTruck.dayshours}</p>
                <p>{foodTruck.fooditems}</p>
              </div>
            ))}
          </div>
          <div className="map">
            <LoadScript googleMapsApiKey="AIzaSyBpJGOgFUdmK65piBRPh4pkmg0dSO8-YwA">
              <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={14}
                center={mapCenter}
              >
                {foodTrucks.map((foodTruck) => (
                  <Marker
                    key={foodTruck.locationid}
                    position={{
                      lat: parseFloat(foodTruck.latitude),
                      lng: parseFloat(foodTruck.longitude),
                    }}
                    title={foodTruck.applicant}
                  />
                ))}
              </GoogleMap>
            </LoadScript>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
