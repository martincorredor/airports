import Image from 'next/image';
import flightImage from '../assets/flight.png';
import infoIcon from '../assets/icons/info.svg';

interface GeneralInfoProps {
  airportData: {
    iata_code: string;
    icao_code?: string;
    country_name: string;
    city_name: string;
    city_iata_code: string;
    phone_number?: string | number;
  };
}

const GeneralInfo: React.FC<GeneralInfoProps> = ({ airportData }) => {
  return (
    <div className="details-section">
      <div className="details-card">
        <div className="details-card-title">
          <Image src={infoIcon} alt="Avión" width={32} height={32} />
          <h2 className="details-card-title-label">Información General</h2>
        </div>
        <div className="details-card-description">
          <p>
            <strong>Código IATA:</strong> {airportData.iata_code}
          </p>
          <p>
            <strong>Código ICAO:</strong>{' '}
            {airportData.icao_code || 'No disponible'}
          </p>
          <p>
            <strong>País:</strong> {airportData.country_name}
          </p>
          <p>
            <strong>Ciudad IATA:</strong> {airportData.city_iata_code}
          </p>
          <p>
            <strong>Teléfono:</strong>{' '}
            {airportData.phone_number || 'No disponible'}
          </p>
        </div>
        <div className="absolute inset-0 opacity-20">
          <Image src={flightImage} alt="Fondo" className="details-card-image" />
        </div>
      </div>
    </div>
  );
};

export default GeneralInfo;
