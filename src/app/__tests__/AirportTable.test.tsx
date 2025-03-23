import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useAirportStore } from '../store/airportStore';
import AirportTable from '../components/AirportTable';

// Mock del store de Zustand
jest.mock('../store/airportStore', () => ({
  useAirportStore: jest.fn(),
}));

describe('AirportTable Component', () => {
  beforeEach(() => {
    (useAirportStore as unknown as jest.Mock).mockReturnValue({
      airports: [
        { id: 1, airport_name: 'Aeropuerto Internacional', iata_code: 'ABC', country_name: 'Colombia' },
        { id: 2, airport_name: 'Aeropuerto Nacional', iata_code: 'XYZ', country_name: 'México' },
        { id: 3, airport_name: 'Aeropuerto Regional', iata_code: 'LMN', country_name: 'Argentina' },
      ],
      cities: [{ iata_code: 'ABC', city_name: 'Bogotá' }],
      isLoading: false,
      error: null,
      fetchAllData: jest.fn(),
    });
  });

  test('Se renderiza correctamente el componente', () => {
    render(<AirportTable />);

    // Verifica que el título esté en pantalla
    expect(screen.getByText('SkyConnect Explorer')).toBeInTheDocument();

    // Verifica que se muestren los aeropuertos
    expect(screen.getByText('Aeropuerto Internacional')).toBeInTheDocument();
    expect(screen.getByText('Aeropuerto Nacional')).toBeInTheDocument();
  });

  test('Cambia de página cuando se hace clic en "Siguiente"', () => {
    render(<AirportTable />);

    const nextButton = screen.getByText('Siguiente');
    fireEvent.click(nextButton);

    // Se espera que la página cambie
    expect(screen.getByText('Siguiente')).toBeInTheDocument();
  });
});
