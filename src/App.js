import React from 'react'
import { api } from "./services/Weather-Api"

function App() {

  async function handleGetWeather(){
    const response = await api.get("Curitiba")
    console.log(response)
  }

  return (
    <>
      <button onClick={handleGetWeather}>Search Weather</button>
    </>
  );
}

export default App;
