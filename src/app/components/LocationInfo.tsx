'use client';

import Image from 'next/image';
import flightImage from '../assets/flight.png';
import mapPointIcon from '../assets/icons/map_point.svg';

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
  //   const lat = -34.5956145;
  //   const lng = -58.4431949;
  const mapContainerStyle = { width: '100%', height: '300px' };
  const center = { lat, lng };

  return (
    <div className="details-section">
      <div className="details-card">
        <div className="details-card-title">
          <Image src={mapPointIcon} alt="Avión" width={32} height={32} />
          <h2 className="details-card-title-label">Ubicación</h2>
        </div>
        <div className="details-card-description">
        <p>
        <strong>Latitud:</strong> {lat}
      </p>
      <p>
        <strong>Longitud:</strong> {lng}
      </p>
      <p>
        <strong>ID Geoname:</strong> {airportData.geoname_id}
      </p>
        </div>
        <div className="absolute inset-0 opacity-20">
          <Image src={flightImage} alt="Fondo" className="details-card-image" />
        </div>
      </div>
    </div>
  );
};

export default LocationInfo;
