'use client';

import { useSearchParams } from 'next/navigation';
import AirportDetails from '@/app/components/AirportDetails';

const AirportDetailss = () => {
  const searchParams = useSearchParams();
  const airportData = searchParams.get('data');

  if (!airportData)
    return (
      <p className="text-white text-center mt-10">
        No se encontraron datos del aeropuerto.
      </p>
    );

  let airport;
  try {
    airport = JSON.parse(decodeURIComponent(airportData));
    console.log('Datos del aeropuerto:', airport);
  } catch (error) {
    console.error('Error al parsear los datos del aeropuerto:', error);
    return (
      <p className="text-white text-center mt-10">
        Error al cargar los datos del aeropuerto.
      </p>
    );
  }

  return <AirportDetails airportData={airport} />;
};

export default AirportDetailss;
