import React, { useState } from "react";
import { api } from "./services/Weather-Api";
import * as S from "./style/styled";
import thermometer from "./assets/thermometer.svg";
import cloudsSun from './assets/clouds-sun.svg'
import wind from './assets/wind.svg'

function App() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState("");
  const setValue = (event) => {
    setCity(event.target.value);
  };

  async function handleGetWeather() {
    const response = await api.get(city);
    setWeather(response.data);
    console.log(city);
    console.log(response.data);
  }

  return (
    <S.Body>
      <S.Header>
        <S.Input
          type="text"
          id="city"
          placeholder="Type the city’s name "
          value={city}
          onChange={setValue}
        />
        <S.Button onClick={handleGetWeather}>Search</S.Button>
      </S.Header>

      {weather && (
        <S.Main>
          <section>
            <h1>Current Weather:</h1>
              <p><img src={thermometer} alt="thermometer" />{weather.temperature}</p>

              <p><img src={cloudsSun} alt="cloud and sun" />{weather.description}</p>

              <p><img src={wind} alt="wind" />{weather.wind}</p>

          </section>

          <h2>Forecast:</h2>
          <S.Forecast>
            {weather.forecast.map((day) => (
              <S.Days>
                <h3>{day.day}º Day</h3>
                <p><img src={thermometer} alt="thermometer" />{day.temperature}</p>
                <p><img src={wind} alt="wind" />{day.wind}</p>
              </S.Days>
            ))}
          </S.Forecast>
        </S.Main>
      )}
    </S.Body>
  );
}

export default App;
