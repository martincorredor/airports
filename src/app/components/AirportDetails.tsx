import { useState } from 'react';
import GeneralInfo from './GeneralInfo';
import LocationInfo from './LocationInfo';
import TimezoneInfo from './TimezoneInfo';

interface AirportDetailsProps {
  airportData: {
    airport_name: string;
    iata_code: string;
    icao_code?: string;
    country_name: string;
    city_name: string;
    phone?: string;
    latitude: number;
    longitude: number;
    timezone: string;
    geoname_id: number | string;
    city_iata_code: string;
  };
}

const AirportDetails: React.FC<AirportDetailsProps> = ({ airportData }) => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-cyan-400 mb-4">
        {airportData.airport_name}
      </h1>

      {/* Tabs */}
      <div className="flex space-x-4 border-b border-gray-700 mb-4">
        <button
          className={`py-2 px-4 ${
            activeTab === 'general'
              ? 'border-b-2 border-cyan-400 text-cyan-400'
              : 'text-gray-400'
          }`}
          onClick={() => setActiveTab('general')}
        >
          General
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === 'location'
              ? 'border-b-2 border-cyan-400 text-cyan-400'
              : 'text-gray-400'
          }`}
          onClick={() => setActiveTab('location')}
        >
          Ubicación
        </button>
        <button
          className={`py-2 px-4 ${
            activeTab === 'timezone'
              ? 'border-b-2 border-cyan-400 text-cyan-400'
              : 'text-gray-400'
          }`}
          onClick={() => setActiveTab('timezone')}
        >
          Zona Horaria
        </button>
      </div>

      {/* Contenido de los tabs */}
      {activeTab === 'general' && <GeneralInfo airportData={airportData} />}
      {activeTab === 'location' && <LocationInfo airportData={airportData} />}
      {activeTab === 'timezone' && <TimezoneInfo airportData={airportData} />}
    </div>
  );
};

export default AirportDetails;
