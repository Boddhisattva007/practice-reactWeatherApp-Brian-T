import { useState, useEffect, useRef } from 'react'

const weatherData = {
    NewYork: {
        summary: "Sunny, 25°C",
        details: "Clear sky's throughout, great day to go to the park."
    },
    London: {
        summary: "Cloudy, 18°C",
        details: "Overcast with occasional light rain in the afternoon."
    },
    Tokyo: {
        summary: "Rainy, 22°C",
        details: "Cloudy with a chance of meatballs."
    },
    Atlantis: {
        summary: "Wet",
        details: "City No Longer Exists."
    }
};

function CityForecast({ selectedCity, onBack }) {
  const [forecast, setForecast] = useState(null);
  const detailsRef = useRef(null);


  useEffect(() => {

    if (selectedCity) {
      const cityWeather = weatherData[selectedCity];
      setForecast(cityWeather);

    }

  }, [selectedCity]);

  if (!selectedCity) {
    return null;
  }

  if (!forecast) {

    return (

      <div>

        <h2>Weather information unavailable.</h2>

        <button onClick={onBack}>
          Back
        </button>

      </div>
    );
  }


  return (

    <div>

      <h2>Weather for {selectedCity}</h2>

      <p>{forecast.summary}</p>

      <a href="#weather-details">
        View Details
      </a>

      <br />
      
      <br />

      <button onClick={onBack}>
        Back
      </button>

      <div id="weather-details" ref={detailsRef} >

        <h3>Detailed Forecast</h3>

        <p>{forecast.details}</p>

      </div>

    </div>
    
  );
}

export default CityForecast;