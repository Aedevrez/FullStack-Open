import Person from "./Person"
import personService from "./services/persons"

const Numbers = ({ persons, setPersons }) => {

    const handleDelete = (person) => {
        console.log("pressed by " + person.name);
        const id = person.id
        if(window.confirm(`Delete ${person.name}?`)) {
            personService
                .deleteById(id)
                .then(setPersons(persons.filter(thatPerson => thatPerson.id != id)))
        }

    }

    return (
        <>
            {persons.map(person => 
                <Person person={person} key={person.id} handleDelete={handleDelete}/>
            )}
        </>
    )
}

export default Numbers