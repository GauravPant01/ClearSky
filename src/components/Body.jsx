import React, { useState } from "react";
import axios from "axios";
import searchIcon from "../assets/searchicon.webp";
import weatherCodes from "../utils/weatherCodes";
import "./Body.css";

const Body = () => {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [weather, setWeather] = useState(null);

  // Fetch city suggestions (only city names)
  const handleChange = async (e) => {
    const value = e.target.value;
    setCity(value);
    setErrorMessage("");
    setWeather(null);

    if (value.length > 1) {
      try {
        const response = await axios.get(
          "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
          {
            params: { namePrefix: value, limit: 5 },
            headers: {
              "x-rapidapi-key": "a8438f968cmsh1e9f55ffb991bf6p1d6a35jsnd756b78ac8fb",
              "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
            },
          }
        );

        const cityNames = response.data.data.map((c) => c.city); // only city name
        setSuggestions(cityNames);
      } catch (error) {
        console.error("Error fetching cities:", error);
      }
    } else {
      setSuggestions([]);
    }
  };

  // Select suggestion
  const handleSelect = (selectedCity) => {
    setCity(selectedCity);
    setSuggestions([]);
    setErrorMessage("");
    setWeather(null);
  };

  // Fetch weather when search button is pressed
  const handleSearch = async () => {
    if (!city) return;

    try {
      // Step 1: Get city coordinates
      const cityResponse = await axios.get(
        "https://wft-geo-db.p.rapidapi.com/v1/geo/cities",
        {
          params: { namePrefix: city, limit: 1 },
          headers: {
            "x-rapidapi-key": "a8438f968cmsh1e9f55ffb991bf6p1d6a35jsnd756b78ac8fb",
            "x-rapidapi-host": "wft-geo-db.p.rapidapi.com",
          },
        }
      );

      if (cityResponse.data.data.length === 0) {
        setErrorMessage("❌ Wrong city name");
        setWeather(null);
        return;
      }

      setErrorMessage("");
      const cityData = cityResponse.data.data[0];
      const { latitude, longitude } = cityData;

      // Step 2: Fetch weather from Open-Meteo (no API key needed)
      const weatherResponse = await axios.get(
        "https://api.open-meteo.com/v1/forecast",
        {
          params: {
            latitude,
            longitude,
            current_weather: true,
          },
        }
      );

      const current = weatherResponse.data.current_weather;

      // Map weather code to description + icon
      const codeInfo =
        weatherCodes[current.weathercode] || { desc: "Unknown", icon: "❓" };

      setWeather({
        temperature: current.temperature,
        windspeed: current.windspeed,
        description: codeInfo.desc,
        icon: codeInfo.icon,
      });
    } catch (error) {
      console.error("Error fetching weather:", error);
      setErrorMessage("⚠️ Something went wrong. Try again later.");
      setWeather(null);
    }
  };

  return (
    <div className="card">
      <div className="search">
        <input
          type="text"
          value={city}
          onChange={handleChange}
          placeholder="Enter city name"
        />
        <button onClick={handleSearch}>
          <img src={searchIcon} alt="search" />
        </button>
      </div>

      {/* Error message */}
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <ul className="suggestions">
          {suggestions.map((s, index) => (
            <li key={index} onClick={() => handleSelect(s)}>
              {s}
            </li>
          ))}
        </ul>
      )}

      {/* Weather info */}
      {weather && (
        <div className="weather-info">
          <p>Temperature: {weather.temperature}°C</p>
          <p>Wind Speed: {weather.windspeed} km/h</p>
          <p>
            Condition: {weather.icon} {weather.description}
          </p>
        </div>
      )}
    </div>
  );
};

export default Body;





