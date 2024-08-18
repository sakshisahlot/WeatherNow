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
      // Update the API URL to use HTTPS
      const response = await axios.get(`https://api.openweathermap.org/geo/1.0/direct`, {
        params: {
          q: searchQuery,
          limit: 1,
          appid: OPENWEATHER_API_KEY,
        }
      });
  
      const locationData = response.data;
      if (locationData.length > 0) {
        const { lat, lon } = locationData[0];
        onLocationUpdate(lat, lon);
        onSearched(true);
        setSearchQuery('');
      } else {
        setError('No location found.');
        onSearched(false);
      }
    } catch (err) {
      setError('Failed to fetch location.');
      onSearched(false);
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div>
      <nav className="navbar navbar-expand-lg pt-3">
        <div className="container">
          <a className="navbar-brand" href="/"><h2 style={{color:'#00008b'}}>WeatherNow</h2></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <div className='d-flex align my-2' style={{width:'100%'}}>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input
              className="me-2"
              type="search"
              placeholder="Search for a location"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => {
                setError('')
                setSearchQuery(e.target.value)}}
            />
            <button className="btn btn-style" type="submit" disabled={loading}>
              {loading ? 'Searching...' : 'Search'}
            </button>
          </form>
          </div>
          {error && <p className="text-danger">{error}</p>}
        </div>
        </div>
      </nav>
    </div>
  );
}
