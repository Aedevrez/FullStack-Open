const FoundCountry = ({ foundCountry }) => {
    return (
      <>
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
}

export default FoundCountry