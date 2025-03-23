import Image from 'next/image';
import flightImage from '../assets/flight.png';
import globalIcon from '../assets/icons/global.svg';
import clockIcon from '../assets/icons/clock.svg';

interface TimezoneInfoProps {
  airportData: {
    iata_code: string;
    icao_code?: string;
    country_name: string;
    city_name: string;
    city_iata_code: string;
    phone_number?: string | number;
    timezone: string;
    geoname_id: number | string;
  };
}

const TimezoneInfo: React.FC<TimezoneInfoProps> = ({ airportData }) => {
  return (
    <div className="details-section">
      <div className="details-card">
        <div className="details-card-title">
          <Image src={globalIcon} alt="Avión" width={32} height={32} />
          <h2 className="details-card-title-label">Zona Horaria</h2>
        </div>
        <div className="details-card-description">
          <p>{airportData.timezone}</p>
        </div>
        <div className="absolute inset-0 opacity-20">
          <Image src={flightImage} alt="Fondo" className="details-card-image" />
        </div>
      </div>
      <br />
      <div className="details-card">
        <div className="details-card-title">
          <Image src={clockIcon} alt="Avión" width={32} height={32} />
          <h2 className="details-card-title-label">Hora Local</h2>
        </div>
        <div className="details-card-description">
          <p>{'No disponible'}</p>
        </div>
        <div className="absolute inset-0 opacity-20">
          <Image src={flightImage} alt="Fondo" className="details-card-image" />
        </div>
      </div>
    </div>
  );
};

export default TimezoneInfo;
