"use client";

import { useSearchParams } from "next/navigation";

const AirportDetails = () => {
  const searchParams = useSearchParams();
  const airportData = searchParams.get("data");

  if (!airportData) return <p>No se encontraron datos del aeropuerto.</p>;

  const airport = JSON.parse(decodeURIComponent(airportData));

  return (
    <div style={{ padding: "20px", color: "#fff" }}>
      <h1 style={{ color: "cyan" }}>{airport.airport_name}</h1>
      <div style={{ background: "#1a1a2e", padding: "15px", borderRadius: "10px" }}>
        <h2>Información General</h2>
        <p><strong>Código IATA:</strong> {airport.iata_code}</p>
        <p><strong>Código ICAO:</strong> {airport.icao_code || "No disponible"}</p>
        <p><strong>País:</strong> {airport.country_name}</p>
        <p><strong>Ciudad:</strong> {airport.city_name}</p>
        <p><strong>Teléfono:</strong> {airport.phone || "No disponible"}</p>
      </div>
    </div>
  );
};

export default AirportDetails;
