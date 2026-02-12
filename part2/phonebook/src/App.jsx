import { useState } from 'react'
import Numbers from './Numbers'
import Filter from './Filter'
import PersonForm from './PersonForm'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('Ada Lovelace')
  const [newPhone, setNewPhone] = useState("135-792-46-80")
  const [filter, setFilter] = useState("")
  const filteredPersons = persons.filter(person => person.name.includes(filter))

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