import { useEffect, useState, useMemo } from "react"
import axios from "axios"
import FoundCountry from "./FoundCountry"

const App = () => {
  const [query, setQuery] = useState("")
  const [foundCountry, setFoundCountry] = useState(null)
  const [countryList, setCountryList] = useState([])

  // Derived — no useState, no useEffect needed
  const filteredCountries = useMemo(() =>
    countryList.filter(c => c.toLowerCase().includes(query.toLowerCase())),
    [query, countryList]
  )

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then(request => setCountryList(request.data.map(c => c.name.official)))
  }, [])

  useEffect(() => {
    if (filteredCountries.length === 1) {
      setFoundCountry(null)
      axios
        .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${filteredCountries[0]}`)
        .then(request => setFoundCountry(request.data))
        .catch(err => console.error("Fetch failed:", err))
    }
  }, [filteredCountries])

  const handleQuery = (event) => setQuery(event.target.value)
  const handleClick = (country) => setQuery(country)

  return (
    <>
      <p>country: <input type="text" value={query} onChange={handleQuery}/></p>
      {filteredCountries.length > 10 && (
        <p>Too many matches, specify another filter</p>
      )}
      {filteredCountries.length === 1 && (
        foundCountry ? <FoundCountry foundCountry={foundCountry}/> : <p>Loading...</p>
      )}
      {filteredCountries.length <= 10 && filteredCountries.length !== 1 &&
        filteredCountries.map(country => (
          <p key={country}>
            {country}
            <button onClick={() => handleClick(country)}>Show</button>
          </p>
        ))
      }
    </>
  )
}

export default App