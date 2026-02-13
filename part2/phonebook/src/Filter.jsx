const Filter = ({ filter, setFilter }) => {

    const handleFilterChange = (event) => {
        setFilter(event.target.value)  
    }

    return (
        <>
            <h3>Filter</h3>
            <p>Filter using <input value={filter} onChange={handleFilterChange}/></p>
        </>
    )
}

export default Filter