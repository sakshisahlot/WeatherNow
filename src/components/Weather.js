import React, { useState, useEffect } from "react";
import axios from "axios";
import WeatherMap from "./WeatherMap";
import weatherIcons from "./WeatherIcons";

const OPENWEATHER_API_KEY = process.env.REACT_APP_OPENWEATHER_API_KEY;

export default function Weather({ coordinates, searched }) {
  const [weatherData, setWeatherData] = useState([]);
  const [currentWeather, setCurrentWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [markerPosition, setMarkerPosition] = useState(null);

  const fetchWeatherData = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather`,
        {
          params: {
            lat: lat,
            lon: lon,
            appid: OPENWEATHER_API_KEY,
            units: "metric",
          },
        }
      );

      const data = response.data;

      setWeatherData([
        {
          lat: data.coord.lat,
          lng: data.coord.lon,
          location: data.name,
          temperature: data.main.temp,
          description: data.weather[0].description,
          windSpeed: data.wind.speed,
          humidity: data.main.humidity,
          feelsLike: data.main.feels_like,
          visibility: data.visibility / 1000,
          pressure: data.main.pressure,
          dewPoint: data.main.temp - (100 - data.main.humidity) / 5,
        },
      ]);

      setCurrentWeather({
        lat: data.coord.lat,
        lon: data.coord.lon,
        location: data.name,
        time: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        temperature: data.main.temp,
        description: data.weather[0].main,
        wind: data.wind.speed,
        humidity: data.main.humidity,
        feelsLike: data.main.feels_like,
        visibility: data.visibility / 1000,
        uvIndex: 2, // Placeholder value
        pressure: data.main.pressure,
        dewPoint: data.main.temp - (100 - data.main.humidity) / 5,
        airQuality: 186, // Placeholder value
      });

      setMarkerPosition({
        lat: data.coord.lat,
        lng: data.coord.lon,
      });

      setLoading(false);
    } catch (err) {
      console.error("Error fetching weather data:", err);
      setError("Failed to fetch weather data.");
      setLoading(false);
    }
  };

  const handleMapClick = (latlng) => {
    console.log("Map Clicked:", latlng); // Debug statement
    setMarkerPosition(latlng);
    fetchWeatherData(latlng.lat, latlng.lng);
  };

  useEffect(() => {
    const fetchInitialWeather = async () => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            fetchWeatherData(
              position.coords.latitude,
              position.coords.longitude
            );
          },
          (error) => {
            console.error("Error getting location:", error);
            fetchWeatherData(39.5, -98.35); // Fallback to a default location
          }
        );
      } else {
        fetchWeatherData(39.5, -98.35); // Fallback to a default location
      }
    };

    if (searched) {
      fetchWeatherData(coordinates.lat, coordinates.lon);
    } else {
      fetchInitialWeather();
    }
  }, [coordinates, searched]);

  if (loading) return <p>Loading weather data...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-5 col-md-12 col-sm-12 text-left my-4">
          <div className="weather-updates">
            <h6 className="fw-bold">
              Current Weather of{" "}
              <b style={{ color: "red" }}>{currentWeather?.location}</b>
            </h6>
            <p className="fw-semibold">{currentWeather?.time}</p>
            <div className="row d-flex">
              <div className="col-lg-3 col-md-3 col-sm-3 col-3">
                {weatherIcons[currentWeather?.description.toLowerCase()] ||
                  weatherIcons.default}
              </div>
              <div className="col-lg-9 col-md-9 col-sm-9 text-start col-9">
                <h1>{currentWeather?.temperature}°C</h1>
                <p>{currentWeather?.description}</p>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                <h6 className="fw-bold">Wind</h6>
                <p>{currentWeather?.wind} km/h</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                <h6 className="fw-bold">Humidity</h6>
                <p>{currentWeather?.humidity}%</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                <h6 className="fw-bold">Feels Like</h6>
                <p>{currentWeather?.feelsLike}°C</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                <h6 className="fw-bold">Visibility</h6>
                <p>{currentWeather?.visibility} km</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                <h6 className="fw-bold">Pressure</h6>
                <p>{currentWeather?.pressure} mb</p>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-4">
                <h6 className="fw-bold">Dew Point</h6>
                <p>{currentWeather?.dewPoint.toFixed(1)}°C</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-7 col-md-12 col-md-12 my-4">
          <div className="weather-map">
            <WeatherMap
              center={[
                markerPosition?.lat || 39.5,
                markerPosition?.lng || -98.35,
              ]}
              zoom={8}
              weatherData={weatherData}
              onMapClick={handleMapClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
