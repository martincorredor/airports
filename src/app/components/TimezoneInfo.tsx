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
    <div className="bg-gray-800 p-4 rounded-lg mt-4">
      <h2 className="text-xl font-semibold text-cyan-300 mb-2">Zona Horaria</h2>
      <p>{airportData.timezone}</p>
      <h2 className="text-xl font-semibold text-cyan-300 mb-2">Hora local</h2>
      <p>{"No disponible"}</p>
    </div>
  );
};

export default TimezoneInfo;
