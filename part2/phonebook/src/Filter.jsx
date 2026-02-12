const Filter = ({ filter, handleFilterChange }) => {
    return (
        <>
            <h3>Filter</h3>
            <p>Filter using <input value={filter} onChange={handleFilterChange}/></p>
        </>
    )
}

export default Filter