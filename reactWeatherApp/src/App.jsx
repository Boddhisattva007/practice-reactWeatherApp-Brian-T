import { useState } from 'react'
import CityList from './Components/CityList';
import CityForecast from './Components/CityForecast';
import './App.css'

function App() {

  const [selectedCity, setSelectedCity] = useState("");

  return (

    <>

    <div>
      <h1>City Weather</h1>

      <br />

      <p>
        Please Select City To See Weather Information
      </p>

      <br />

      <CityList onCitySelect={setSelectedCity}/>

      <CityForecast selectedCity={selectedCity} onBack={() => setSelectedCity("")} />

    </div>

    </>

  );
}

export default App
