import { useEffect, useState } from "react"
import axios from "axios"

const App = () => {
  const [query, setQuery] = useState("")
  const [foundCountry, setFoundCountry] = useState({})

  const [countryList, setCountryList] = useState([])
  const [filteredCountries, setFilteredCountries] = useState([])

  /*useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${query}`)
      .then(request => setCountry(request.data.name.official))
  }, [query])*/

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(request => setCountryList(request.data.map(c => c.name.official)))
  }, [])

  const handleQuery = (event) => {
    setQuery(event.target.value)
    
  }

  useEffect(() => {
    setFilteredCountries(countryList.filter(c => c.toLowerCase().includes(query)))
  }, [query, countryList])

  useEffect(() => {
    if (filteredCountries.length === 1) {
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${filteredCountries[0]}`)
        .then(request => setFoundCountry(request.data)) 
    }
  }, [filteredCountries])

  if (filteredCountries.length > 10) {
    return (
      <>
        <p>country: <input type="text" value={query} onChange={handleQuery}/></p>
        <p>Too many matches, specify another filter</p>
      </>
    )
  } else if (filteredCountries.length === 1) {
    return (
      <>
        <p>country: <input type="text" value={query} onChange={handleQuery}/></p>
        <h1>{foundCountry?.name?.official}</h1>
        <p>Capital {foundCountry?.capital}</p>
        <p>Area {foundCountry?.area}</p>
        <h2>Languages</h2>
        <ul>
          {Object.values(foundCountry?.languages || {}).map(language => 
            <li key={language}>
              {language}
            </li>
          )}
        </ul>
        <img src={foundCountry?.flags?.png} />
      </>
    )
  } else {
    return (
      <>
        <p>country: <input type="text" value={query} onChange={handleQuery}/></p>
        {filteredCountries.map(country => (
          <p key={country}>{country}</p>
        ))}
      </>
    )
  }
}

export default App