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

const ShowCountryName = ({country}) => {
  return (
    <div>
      {country.name.common}
    </div>
  )
}

const ShowCountry = ({country}) => {
  return (
    <h2>{country.name.common}</h2>
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

const ShowFilterResult = ({countries}) => {
  if (countries.length > 10) {
    return (
      <div>
        Too many matches
      </div>
    )
  } else if (countries.length === 1) {
    const country = countries[0]
    return (
      <div>
        <ShowCountry country={country} />
        <p>
          capital {country.capital} <br />
          area {country.area}
        </p>
        <h3>languages:</h3>
        <div>
          <ul>
            {Object.values(country.languages).map(language => <li>{language}</li>)}
          </ul>
        </div>
        <ShowFlag country={country} />
      </div>
    )
  } else {
    return (
    <div>
      {countries.map(country => <ShowCountryName key={country.name.official} country={country} />)}
    </div>
    )
  }
}

const App = () => {
  const [countries, setCountries] = useState([])
  const [filterString, setFilterString] = useState('')

  useEffect(() => {
    console.log('effect...')
    axios.get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
      })
    }, [])

  const handleFilterChange = (event) => {
    setFilterString(event.target.value)
  }

  const countriesToShow = filterString
    ? countries.filter(country => country.name.common.toLowerCase().includes(filterString.toLowerCase()))
    : countries


return (
  <div>
    <FilterForm text={filterString} handler={handleFilterChange} />
    <ShowFilterResult countries={countriesToShow} />
  </div>)
}

export default App;
