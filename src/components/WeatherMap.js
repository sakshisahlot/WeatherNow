import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for marker icons not loading correctly
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

const WeatherMap = ({ center, zoom, weatherData, onMapClick }) => {
  const markerData = weatherData.length > 0 ? weatherData[0] : null;

  // Component to handle map events
  function MapEvents() {
    useMapEvents({
      click(e) {
        onMapClick(e.latlng);
      }
    });
    return null;
  }

  // Hook to update the map's center and zoom
  function UpdateMapView({ center, zoom }) {
    const map = useMap();

    useEffect(() => {
      if (center) {
        map.setView(center, zoom);
      }
    }, [center, zoom, map]);

    return null;
  }

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: '100%', width: '100%', cursor: 'pointer' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MapEvents />
      <UpdateMapView center={center} zoom={zoom} />
      {markerData && (
        <Marker position={[markerData.lat, markerData.lng]}>
          <Popup>
            {markerData.location}
            <br />
            Temperature: {markerData.temperature}°C
            <br />
            Description: {markerData.description}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default WeatherMap;
