const API_KEY = '09e47f8f15bee8a8e75f22b9700b1b4bmartin';
const BASE_URL = 'https://api.aviationstack.com/v1';


export const fetchAirports = async () => {
  try {
    const response = await fetch(
      `${BASE_URL}/airports?access_key=${API_KEY}&limit=50`
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
