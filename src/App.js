import React, { useState } from 'react';
import './App.css';
import Searchbar from './components/Searchbar';
import Weather from './components/Weather';
import 'leaflet/dist/leaflet.css';

function App() {
  const [coordinates, setCoordinates] = useState({ lat: 39.5, lon: -98.35 }); // Default to center of the US
  const [searched, setSearched] = useState(false);

  const handleLocationUpdate = (lat, lon) => {
    setCoordinates({ lat, lon });
  };

  const handleSearched = (status) => {
    setSearched(status);
  };

  const currentHour = new Date().getHours();
  const isDay = currentHour >= 6 && currentHour < 18;
  const weatherContainerStyle = {
    background: isDay
      ? 'linear-gradient(to bottom, #87CEFA, #87CEFA)' // Light blue gradient for day
      : 'linear-gradient(to bottom, #2C3E50, #34495E)', // Darker blue gradient for night
    height: '100vh', // Full viewport height
    width: '100%', // Full width
  };

  return (
    <div className="App">
      <Searchbar onLocationUpdate={handleLocationUpdate} onSearched={handleSearched} />
      <div className="weather-container pt-4" style={weatherContainerStyle}>
        <Weather coordinates={coordinates} searched={searched} />
      </div>
    </div>
  );
}

export default App;
