import { useEffect, useState } from "react"
import axios from "axios"

const App = () => {
  const [query, setQuery] = useState("finland")
  const [country, setCountry] = useState("")
  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/name/${query}`)
      .then(request => setCountry(request.data.name.official))
  }, [query])

  const handleQuery = (event) => {
    setQuery(event.target.value)
  }

  return (
    <>
    <p>country: <input type="text" value={query} onChange={handleQuery}/></p>
    <p>{country}</p>
    </>
  )
}

export default App