import create from 'zustand';
import axios from 'axios';

const useWeatherStore = create((set) => ({
    weather: null,
    city: '',
    loading: false,
    error: null,
    setCity: (city) => set({ city }),
    fetchWeather: async (city) => {
        set({ loading: true, error: null });
        try {
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6e55de3ed5b129ce6fef4d8071d4ee0e&units=metric`
            );
            set({ weather: response.data, loading: false });
        } catch (error) {
            set({ error: error.message, loading: false });
        }
    },
}));

export default useWeatherStore;



