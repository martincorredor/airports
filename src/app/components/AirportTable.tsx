'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAirportStore } from '../store/airportStore';

const AirportTable = () => {
  const { airports, cities, isLoading, error, fetchAllData } =
    useAirportStore();
  const router = useRouter();

  useEffect(() => {
    fetchAllData();
  }, []);

  const getCityName = (iataCode: string) => {
    const city = cities.find((c) => c.iata_code === iataCode);
    return city ? city.city_name : 'Desconocido';
  };

  const handleRowClick = (airport: any) => {
    const cityName = getCityName(airport.iata_code);

    const airportData = encodeURIComponent(
      JSON.stringify({ ...airport, city_name: cityName })
    );

    router.push(`/airport/${airport.iata_code}?data=${airportData}`);
  };

  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>{error}</p>;

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre del Aeropuerto</th>
          <th>Ciudad</th>
          <th>País</th>
          <th>Código IATA</th>
        </tr>
      </thead>
      <tbody>
        {airports.map((airport) => (
          <tr
            key={airport.id}
            onClick={() => handleRowClick(airport)}
            style={{ cursor: 'pointer' }}
          >
            <td>{airport.airport_name}</td>
            <td>{getCityName(airport.iata_code)}</td>
            <td>{airport.country_name}</td>
            <td>{airport.iata_code}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AirportTable;
