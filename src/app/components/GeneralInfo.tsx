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
    <div className="bg-gray-800 p-4 rounded-lg mt-4">
      <h2 className="text-xl font-semibold text-cyan-300 mb-2">
        Información General
      </h2>
      <p>
        <strong>Código IATA:</strong> {airportData.iata_code}
      </p>
      <p>
        <strong>Código ICAO:</strong> {airportData.icao_code || 'No disponible'}
      </p>
      <p>
        <strong>País:</strong> {airportData.country_name}
      </p>
      <p>
        <strong>Ciudad IATA:</strong> {airportData.city_iata_code}
      </p>
      <p>
        <strong>Teléfono:</strong> {airportData.phone_number || 'No disponible'}
      </p>
    </div>
  );
};

export default GeneralInfo;
