import { useEffect, useState } from "react"
import axios from "axios"

const App = () => {
  const [query, setQuery] = useState("")
  //const [country, setCountry] = useState("")

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
      .then(request => setCountryList(request.data))
  }, [])

  const handleQuery = (event) => {
    setQuery(event.target.value)
    
  }

  useEffect(() => {
    setFilteredCountries(countryList.filter(c => c.name.official.toLowerCase().includes(query)))
  }, [query])

  if (filteredCountries.length > 10) {
    return (
      <>
        <p>country: <input type="text" value={query} onChange={handleQuery}/></p>
        <p>Too many matches, specify another filter</p>
      </>
    )
  } else {
    return (
      <>
        <p>country: <input type="text" value={query} onChange={handleQuery}/></p>
        {filteredCountries.map(country => (
          <p key={country.cca2}>{country.name.official}</p>
        ))}
      </>
    )
  }
}

export default App