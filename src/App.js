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


  return (
    <div className="App" style={{
      backgroundImage: 'linear-gradient(to bottom, #70C2F7, #C2FDFF)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      minHeight: '100vh',
    }}>
      <Searchbar onLocationUpdate={handleLocationUpdate} onSearched={handleSearched} />
      <div className="weather-container pt-4">
        <Weather coordinates={coordinates} searched={searched}/>
      </div>
    </div>
  );
}

export default App;
