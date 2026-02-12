import Person from "./Person"

const Numbers = ({ persons }) => {
    return (
        <>
            {persons.map(person => 
                <Person person={person} key={person.name}/>
            )}
        </>
    )
}

export default Numbers