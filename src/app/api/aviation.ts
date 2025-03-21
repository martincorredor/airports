const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const fetchAirports = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/airports?access_key=${API_KEY}&limit=100`
    );
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching airports:', error);
    return [];
  }
};

export const fetchCities = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/cities?access_key=${API_KEY}&limit=1000`
    );
    const data = await response.json();
    return data.data || [];
  } catch (error) {
    console.error('Error fetching cities:', error);
    return [];
  }
};

export const fetchAirportDetails = async (iataCode: string) => {
  console.log('fetchAirportDetails:', iataCode);
  try {
    const response = await fetch(`${BASE_URL}/airport/${iataCode}`);
    const data = await response.json();
    console.log('Details:', data);
    return data.data || [];
  } catch (error) {
    console.error(`Error fetching details for airport ${iataCode}:`, error);
    return null;
  }
};
