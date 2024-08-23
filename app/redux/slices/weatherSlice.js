
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city) => {
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=19d50d0356d34e2bb9551335222410&q=${
        city || "Cairo"
      }&days=2`
    );
    if (!response.ok) {
      let error = await response.json();
      throw new Error(error?.error?.message || "Failed to fetch weather data.");
    }
    return response.json();
  }
);

const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    city: "Cairo",
    weatherData: null,
    loading: true,
    error: null,
  },
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.weatherData = action.payload;
        state.loading = false;
        state.error = null;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setCity } = weatherSlice.actions;

export default weatherSlice.reducer;
