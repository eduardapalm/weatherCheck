import React, { useState, useEffect } from "react";
import { api } from "./services/Weather-Api";

function App() {
  const [weather, setWeather] = useState();
  const city = "Sergipe";

  async function handleGetWeather() {
    const response = await api.get(city);
    console.log(response.data);
    setWeather(response.data);
  }

  return (
    <>
      {/* <header>
        <button onClick={handleGetWeather}>Search Weather</button>
      </header> */}

      {weather && (
        <main>
          <h1>{city}</h1>

          <section>
            <h2>Current Weather:</h2>
            <p>{weather.temperature}</p>
            <p>{weather.description}</p>
            <p>Wind speed: {weather.wind}</p>
          </section>

          <section>
            <h2>Forecast:</h2>
            {
              weather.forecast.map( day =>
                <>
                  <p>{day.temperature}</p>
                  <p>{day.wind}</p>
                </>
              )
            }
          </section>
        </main>
      )}
    </>
  );
}

export default App;
