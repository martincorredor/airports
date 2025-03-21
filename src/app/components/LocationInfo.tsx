'use client';

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
    <div className="bg-gray-800 p-4 rounded-lg mt-4">
      <h2 className="text-xl font-semibold text-cyan-300 mb-2">Ubicación</h2>
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
  );
};

export default LocationInfo;
