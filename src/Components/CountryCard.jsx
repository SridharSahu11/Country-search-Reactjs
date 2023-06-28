import React from 'react';
import './CountryCard.css';

const CountryCard = ({country}) => {
  return (
  <div className="card" key={country.id}>
        <div className="flag-container">
          <img src={country.flag} alt={`${country.name} flag`} />
        </div>
        <div className="text-container">
          <h2>{country.name.toUpperCase()}</h2>
          <p>
            <strong>Population: </strong>
            {new Intl.NumberFormat().format(country.population)}
          </p>
          <p>
            <strong>Region: </strong>
            {country.region}
          </p>
          <p>
            <strong>Capital: </strong>
            {country.capital}
          </p>
          <p>
            <strong>Language: </strong>
            {country.languages[0].name}
          </p>
          <p>
            <strong>Currency: </strong>
            {country.currencies[0].code}
          </p>
        </div>
      </div>
    )
}

export default CountryCard;