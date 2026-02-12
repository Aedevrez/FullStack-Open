import { useEffect, useState } from 'react'
import Numbers from './Numbers'
import Filter from './Filter'
import PersonForm from './PersonForm'
import axios from "axios"

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('Ada Lovelace')
  const [newPhone, setNewPhone] = useState("135-792-46-80")
  const [filter, setFilter] = useState("")
  const filteredPersons = persons.filter(person => person.name.includes(filter))

  useEffect(() => {
    console.log("inside effect");
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        console.log("promise fulfilled");
        setPersons(response.data)
      })
  }, [])

  const addName = (event) => {
    event.preventDefault()

    if (persons.map(person => person.name).includes(newName)) {
        alert(`${newName} is already added!`)
        return
    }

    const addedPerson = {
        name: newName,
        number: newPhone
    }

    setPersons(persons.concat(addedPerson))
    
    setNewName("")
    setNewPhone("")
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)  
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange}/>
      <h3>Submit New Person</h3>
      <PersonForm addName={addName} newName={newName} newPhone={newPhone} handleNameChange={handleNameChange} handlePhoneChange={handlePhoneChange}/>
      <h3>Numbers</h3>
      <Numbers persons={filteredPersons}/>
      
    </div>
  )
}

export default App