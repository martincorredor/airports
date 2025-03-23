'use client';

import Image from 'next/image';
import flightImage from '../assets/flight.png';
import mapPointIcon from '../assets/icons/map_point.svg';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

interface LocationInfoProps {
  airportData: {
    latitude: number | string;
    longitude: number | string;
    geoname_id: number | string;
  };
}

const LocationInfo: React.FC<LocationInfoProps> = ({ airportData }) => {
  const lat = Number(airportData.latitude);
  const lng = Number(airportData.longitude);
  
  const mapContainerStyle = { width: '100%', height: '300px' };
  const center = { lat, lng };

  return (
    <div className="details-section">
      <div className="details-card">
        <div className="details-card-title">
          <Image src={mapPointIcon} alt="Ubicación" width={32} height={32} />
          <h2 className="details-card-title-label">Ubicación</h2>
        </div>
        <div className="details-card-description">
          <p><strong>Latitud:</strong> {lat}</p>
          <p><strong>Longitud:</strong> {lng}</p>
          <p><strong>ID Geoname:</strong> {airportData.geoname_id}</p>
        </div>
        <div className="absolute inset-0 opacity-20">
          <Image src={flightImage} alt="Fondo" className="details-card-image" />
        </div>
      </div>
      <br />

      {/* Mapa de Google */}
      <div className="map-container">
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string}>
          <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={12}>
            <Marker position={center} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default LocationInfo;
