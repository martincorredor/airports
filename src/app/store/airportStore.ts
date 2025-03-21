import { create } from 'zustand';
import {
  fetchAirports,
  fetchCities,
  fetchAirportDetails,
} from '@/app/api/aviation';

interface Airport {
  id: string;
  airport_name: string;
  iata_code: string;
  country_name: string;
}

interface City {
  iata_code: string;
  city_name: string;
}

interface AirportDetails {
  iata: string;
  icao: string;
  country: string;
  city: string;
  phone: string;
}

interface AirportStore {
  airports: Airport[];
  cities: City[];
  airportDetails: AirportDetails | null;
  isLoading: boolean;
  error: string | null;
  fetchAllData: () => Promise<void>;
  fetchAirportDetails: (iataCode: string) => Promise<void>;
}

export const useAirportStore = create<AirportStore>((set, get) => ({
  airports: [],
  cities: [],
  airportDetails: null,
  isLoading: false,
  error: null,

  fetchAllData: async () => {
    const { airports, cities } = get();

    if (airports.length > 0 && cities.length > 0) {
      console.log('⚡ Datos ya cargados, evitando nueva petición.');
      return;
    }

    set({ isLoading: true, error: null });

    try {
      const [airportsData, citiesData] = await Promise.all([
        fetchAirports(),
        fetchCities(),
      ]);
      set({ airports: airportsData, cities: citiesData });
    } catch (error) {
      set({ error: 'Error fetching airports data' });
    } finally {
      set({ isLoading: false });
    }
  },

  fetchAirportDetails: async (iataCode: string) => {
    set({ isLoading: true, error: null });

    try {
      const details = await fetchAirportDetails(iataCode);
      set({ airportDetails: details });
    } catch (error) {
      set({ error: 'Error fetching airport details data' });
    } finally {
      set({ isLoading: false });
    }
  },
}));
