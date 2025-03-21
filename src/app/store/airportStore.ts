import { create } from 'zustand';
import { fetchAirports, fetchCities } from '../api/aviation';

interface Airport {
  id: string;
  iata_code: string;
  icao_code: string;
  airport_name: string;
  country_name: string;
}

interface City {
  iata_code: string;
  city_name: string;
}

interface AirportStore {
  airports: Airport[];
  cities: City[];
  isLoading: boolean;
  error: string | null;
  fetchAllData: () => Promise<void>;
}

export const useAirportStore = create<AirportStore>((set) => ({
  airports: [],
  cities: [],
  isLoading: false,
  error: null,

  fetchAllData: async () => {
    set({ isLoading: true, error: null });

    try {
      const [airportsData, citiesData] = await Promise.all([
        fetchAirports(),
        fetchCities(),
      ]);

      set({ airports: airportsData, cities: citiesData });
    } catch (error) {
      set({ error: 'Error al cargar los datos', airports: [], cities: [] });
    } finally {
      set({ isLoading: false });
    }
  },
}));
