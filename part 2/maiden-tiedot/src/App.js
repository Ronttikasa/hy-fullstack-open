import { useEffect, useState } from 'react'
import axios from 'axios'

const FilterForm = ({text, handler}) => {
  return(
    <div>
      <form>
        find countries:
        <input value={text} onChange={handler} />
      </form>
    </div>
  )
}

const ShowCountryName = ({country, handler}) => {
  return (
    <div>
      {country.name.common} <button onClick={() => handler(country)}>show</button>
    </div>
  )
}

const ShowCountry = ({country}) => {
  return (
    <div>
        <h2>{country.name.common}</h2>
        <p>
          capital {country.capital} <br />
          area {country.area}
        </p>
        <h3>languages:</h3>
        <div>
          <ul>
            {Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
          </ul>
        </div>
        <ShowFlag country={country} />
      </div>
  )
}


const ShowFlag = ({country}) => {
  const flagURL = country.flags.png
  return (
    <div>
      <img src={flagURL} />
    </div>
  )
}

const ShowFilterResult = ({countries, handler, countryToShow}) => {
  // console.log(countries)
  // console.log(countryToShow)
  if (countryToShow) {
    return (
      <ShowCountry country={countryToShow} />
    )
  } else if (countries.length > 10) {
    return (
      <div>
        Too many matches
      </div>
    )
  } else if (countries.length === 1) {
    const country = countries[0]
    return (
      <ShowCountry country={country} />
    )
  } else {
    return (
    <div>
      {countries.map(country =>
        <ShowCountryName key={country.name.official} country={country} handler={handler} />)}
    </div>
    )
  }
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterString, setFilterString] = useState('')
  const [countryToShow, setCountryToShow] = useState(null)

  useEffect(() => {
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
    }, [])

  const handleFilterChange = (event) => {
    setFilterString(event.target.value)
    setCountryToShow(null)
  }

  const countriesToShow = filterString
    ? countries.filter(country => country.name.common.toLowerCase().includes(filterString.toLowerCase()))
    : countries


return (
  <div>
    <FilterForm text={filterString} handler={handleFilterChange} />
    <ShowFilterResult 
      countries={countriesToShow} 
      handler={setCountryToShow} 
      countryToShow={countryToShow} />
  </div>)
}

export default App;
