'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAirportStore } from '../store/airportStore';
import Image from 'next/image';
import flightImage from '../assets/flight.png';
import searchIcon from '../assets/icons/search_icon.svg';
import flightIcon from '../assets/icons/flight.svg';

const ITEMS_PER_PAGE = 6;

const AirportTable = () => {
  const { airports, cities, isLoading, error, fetchAllData } =
    useAirportStore();
  const router = useRouter();

  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchAllData();
  }, []);

  const getCityName = (iataCode: string) => {
    const city = cities.find((c) => c.iata_code === iataCode);
    return city ? city.city_name : 'Desconocido';
  };

  const handleCardClick = (airport: any) => {
    const cityName = getCityName(airport.iata_code);
    const airportData = encodeURIComponent(
      JSON.stringify({ ...airport, city_name: cityName })
    );
    router.push(`/airport/${airport.iata_code}?data=${airportData}`);
  };

  const filteredAirports = airports.filter(
    (airport) =>
      airport.airport_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      airport.iata_code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredAirports.length / ITEMS_PER_PAGE);
  const displayedAirports = filteredAirports.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const generatePagination = () => {
    if (totalPages <= 3) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (currentPage <= 2) {
      return [1, 2, '...', totalPages];
    }

    if (currentPage >= totalPages - 1) {
      return [1, '...', totalPages - 1, totalPages];
    }

    return [1, '...', currentPage, '...', totalPages];
  };

  if (isLoading) return <p className="loading-text">Cargando...</p>;
  if (error) return <p className="error-text">{error}</p>;

  return (
    <div className="main-container">
      {/* Header con título y barra de búsqueda */}
      <div className="header">
        <h1 className="h1-gradient">SkyConnect Explorer</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Buscar aeropuertos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="input-search"
          />
          <button className="search-button">
            <Image
              src={searchIcon}
              alt="Buscar"
              width={20}
              height={20}
              className="icon"
            />
            Buscar
          </button>
        </div>
      </div>

      {/* Tarjetas de aeropuertos */}
      <div className="cards-container">
        {displayedAirports.map((airport) => (
          <div
            key={airport.id}
            onClick={() => handleCardClick(airport)}
            className="airport-card"
          >
            <h2 className="airport-card-name">{airport.airport_name}</h2>
            <p className="airport-card-location">
              {getCityName(airport.iata_code)}, {airport.country_name}
            </p>
            <span className="airport-card-code">{airport.iata_code}</span>

            {/* Ícono de avión */}
            <div className="airport-card-icon">
              <Image src={flightIcon} alt="Avión" width={32} height={32} />
            </div>

            {/* Fondo de la tarjeta */}
            <div className="absolute inset-0 opacity-20">
              <Image
                src={flightImage}
                alt="Fondo"
                className="airport-card-image"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Paginación */}
      <div className="pagination-container">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="prev-button"
          disabled={currentPage === 1}
        >
          Anterior
        </button>

        {generatePagination().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && setCurrentPage(page)}
            className={`page-number ${
              currentPage === page ? 'current-page' : ''
            }`}
            disabled={typeof page !== 'number'}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          className="next-button"
          disabled={currentPage === totalPages}
        >
          Siguiente
        </button>
      </div>
    </div>
  );
};

export default AirportTable;
