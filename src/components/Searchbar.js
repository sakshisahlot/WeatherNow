import React, { useState } from 'react';
import axios from 'axios';

const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

export default function Searchbar({ onLocationUpdate, onSearched }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Fetch location data from OpenWeatherMap API
      const response = await axios.get(`http://api.openweathermap.org/geo/1.0/direct`, {
        params: {
          q: searchQuery,
          limit: 1,
          appid: OPENWEATHER_API_KEY,
        }
      });

      const locationData = response.data;
      if (locationData.length > 0) {
        const { lat, lon } = locationData[0];
        // Pass the coordinates to the parent component
        onLocationUpdate(lat, lon);
        onSearched(true); // Indicate that a search has been made
        setSearchQuery(''); // Clear the search input
      } else {
        setError('No location found.');
        onSearched(false); // Indicate that no valid search was made
      }
    } catch (err) {
      setError('Failed to fetch location.');
      onSearched(false); // Indicate that an error occurred
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light searchbar-bg-color">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">WeatherNow</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for a location"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-success" type="submit" disabled={loading}>
              {loading ? 'Searching...' : 'Search'}
            </button>
          </form>
          {error && <p className="text-danger">{error}</p>}
        </div>
        </div>
      </nav>
    </div>
  );
}
