'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import flightImage from '../assets/flight.png';
import searchIcon from '../assets/icons/search_icon.svg';
import flightIcon from '../assets/icons/flight.svg';

const ITEMS_PER_PAGE = 6;


const AirportTable = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const filteredAirports = dummyAirports.filter(
    (airport) =>
      airport.airport_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      airport.iata_code.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredAirports.length / ITEMS_PER_PAGE);
  const displayedAirports = filteredAirports.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleCardClick = (airport: any) => {
    const airportData = encodeURIComponent(JSON.stringify(airport));
    router.push(`/airport/${airport.iata_code}?data=${airportData}`);
  };

  let startPage = Math.max(1, currentPage - 1);
  let endPage = Math.min(totalPages, startPage + 2);

  if (endPage - startPage < 2) {
    startPage = Math.max(1, endPage - 2);
  }

  const pageNumbers = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i
  );

  return (
    <div className="main-container">
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
              alt="Icono"
              width={20}
              height={20}
              className="icon"
            />
            Buscar
          </button>
        </div>
      </div>

      <div className="cards-container">
        {displayedAirports.map((airport) => (
          <div
            key={airport.id}
            onClick={() => handleCardClick(airport)}
            className='airport-card'
          >
            <h2 className="airport-card-name">{airport.airport_name}</h2>
            <p className="airport-card-location">
              {'Villa de Leyva'}, {airport.country_name}
            </p>
            <span className="airport-card-code">
              {airport.iata_code}
            </span>

            <div className="airport-card-icon">
              <Image src={flightIcon} alt="Avión" width={32} height={32} />
            </div>

            <div className="absolute inset-0 opacity-20">
              <Image
                src={flightImage}
                alt="Fondo"
                className='airport-card-image'
              />
            </div>
          </div>
        ))}
      </div>

      <div className="pagination-container">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          className="prev-button"
          disabled={currentPage === 1}
        >
          Anterior
        </button>

        {startPage > 1 && (
          <>
            <button onClick={() => setCurrentPage(1)} className="page-number">
              1
            </button>
            <span className="dots">...</span>
          </>
        )}

        {pageNumbers.map((page) => (
          <button
            key={page}
            onClick={() => setCurrentPage(page)}
            className={` ${
              currentPage === page
                ? 'current-page'
                : 'page-number'
            }`}
          >
            {page}
          </button>
        ))}

        {/* Si la última página no está en el rango visible, mostrar "..." y la última página */}
        {endPage < totalPages && (
          <>
            <span className="dots">...</span>
            <button onClick={() => setCurrentPage(totalPages)} className="page-number">
              {totalPages}
            </button>
          </>
        )}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
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
