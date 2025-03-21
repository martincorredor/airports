import React from 'react';

interface AirportDetailsProps {
  airport: {
    airport_name: string;
    iata_code: string;
    icao_code: string;
    country_name: string;
    country_iso2: string;
    city_iata_code: string;
    phone_number?: string | null;
  };
}

const AirportDetails: React.FC<AirportDetailsProps> = ({ airport }) => {
  return (
    <div className="airport-details">
      <h2 className="title">{airport.airport_name}</h2>
      <div className="info-card">
        <h3>
          ℹ️ <span>Información General</span>
        </h3>
        <p>
          <strong>Código IATA:</strong> {airport.iata_code}
        </p>
        <p>
          <strong>Código ICAO:</strong> {airport.icao_code}
        </p>
        <p>
          <strong>País:</strong> {airport.country_name} ({airport.country_iso2})
        </p>
        <p>
          <strong>Ciudad IATA:</strong> {airport.city_iata_code}
        </p>
        <p>
          <strong>Teléfono:</strong> {airport.phone_number || 'No disponible'}
        </p>
      </div>
    </div>
  );
};

export default AirportDetails;
