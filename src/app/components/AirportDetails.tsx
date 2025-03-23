import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import GeneralInfo from './GeneralInfo';
import LocationInfo from './LocationInfo';
import TimezoneInfo from './TimezoneInfo';
import backIcon from '../assets/icons/go-back.png';
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
  const router = useRouter(); // Hook para la navegación

  return (
    <div className="details-page">
      {/* Botón de volver */}
      <button className="back-button" onClick={() => router.back()}>
        <Image src={backIcon} alt="Volver" width={24} height={24} />
        Volver
      </button>

      <h1 className="h1-gradient">{airportData.airport_name}</h1>

      {/* Tabs */}
      <div className="details-page-tabs">
        <button
          className={`${
            activeTab === 'general' ? 'tab-active' : 'tab-inactive'
          }`}
          onClick={() => setActiveTab('general')}
        >
          General
        </button>
        <button
          className={`${
            activeTab === 'location' ? 'tab-active' : 'tab-inactive'
          }`}
          onClick={() => setActiveTab('location')}
        >
          Ubicación
        </button>
        <button
          className={`${
            activeTab === 'timezone' ? 'tab-active' : 'tab-inactive'
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
