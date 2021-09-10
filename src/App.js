import React, { useState } from "react";
import { api } from "./services/Weather-Api";
import * as S from './style/styled'

function App() {
  const [weather, setWeather] = useState();
  const [city, setCity] = useState('');
  const setValue = (event) => {
    setCity(event.target.value)
  }

  async function handleGetWeather() {
      const response = await api.get(city);
      setWeather(response.data);
      console.log(city)
      console.log(response.data);
  }

  return (
    <S.Body>
      <S.Header>
          <S.Input type="text" id="city" placeholder="Type the city’s name " value={city} onChange={setValue}/>
          <S.Button onClick={handleGetWeather}>Search</S.Button>
      </S.Header>

      {weather && (
        <S.Main>
          <section>
            <h1>Current Weather:</h1>
            <p>{weather.temperature}</p>
            <p>{weather.description}</p>
            <p>Wind speed: {weather.wind}</p>
          </section>


            <h2>Forecast:</h2>
          <S.Forecast>
            {weather.forecast.map((day) => (
              <S.Days>
                  <h3>{day.day}º Day</h3>
                <p>{day.temperature}</p>
                <p>{day.wind}</p>
              </S.Days>
            ))}
          </S.Forecast>
        </S.Main>
      )}
    </S.Body>
  );
}

export default App;
