import React from 'react';
import './App.css';
import CountryCard from './functional/countryCard';
import { countries } from '../data/countries';

function App() {
  return (
    <div className="App">
      <div className="items">
        <h1>Countries</h1>
        {
          countries.map(
            country => (
              <CountryCard 
                key={country.name}
                name={country.name}
                image={country.image}
              />
            )
          )
        }
      </div>
    </div>
  );
}

export default App;