import personService from "./services/persons"

const PersonForm = ({persons, newName, newPhone, message, type, setPersons, setNewName, setNewPhone, setMessage, setType}) => {
  const addName = (event) => {
    event.preventDefault()

    const addedPerson = {
        name: newName,
        number: newPhone
    }

    if (persons.map(person => person.name).includes(newName)) {
        //alert(`${newName} is already added!`)
        //return
        if (!window.confirm(`${newName} is already added. Do you want to update their number with ${newPhone}?`)) {
          return
        }

        const id = persons.find(currentPerson => currentPerson.name == newName).id
        personService
          .update(id, addedPerson)
          .then(updatedPerson => {
            setPersons(persons.map(currentPerson => currentPerson.id == id ? updatedPerson : currentPerson))
            setMessage(`Updated ${newName}`)
            setType("success")
          })
          .catch(error => {
            setPersons(persons.filter(person => person.name != newName))
            setMessage(`Information of ${newName} has already been deleted!`)
            setType("error")
          })
    } else {
        personService
        .create(addedPerson)
        .then(createdPerson => {
          setPersons(persons.concat(createdPerson))
          setMessage(`Added ${newName}`)
          setType("success")
        })
    }

    setNewName("")
    setNewPhone("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }  
  
  return (
        <form onSubmit={addName}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
            phone number: <input value={newPhone} onChange={handlePhoneChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}

export default PersonForm