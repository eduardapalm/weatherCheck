import React, { useState } from 'react'
import { api } from "./services/Weather-Api"

function App() {

  const [weather, setWeather] = useState()
  const city = "Rio de Janeiro"

  async function handleGetWeather(){
    const response = await api.get(city)
    console.log(response.data)
    setWeather(response.data)
  }

  return (
    <>

    <header>
      <button onClick={handleGetWeather}>Buscar Previsão</button>
    </header>

    <main>
      {JSON.stringify(weather)}
    </main>


    </>
  );
}

export default App;
