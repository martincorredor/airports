"use client"
import { useEffect } from "react";
import { useAirportStore } from "../store/airportStore";

const AirportTable = () => {
  const { airports, cities, isLoading, error, fetchAllData } = useAirportStore();

  useEffect(() => {
    fetchAllData();
  }, []);

  const getCityName = (iataCode: string) => {
    const city = cities.find((c) => c.iata_code === iataCode);
    return city ? city.city_name : "Desconocido";
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
          <tr key={airport.id}>
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
