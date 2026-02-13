import { useEffect, useState } from 'react'
import Numbers from './Numbers'
import Filter from './Filter'
import PersonForm from './PersonForm'
import personService from "./services/persons"

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('Alan Turing')
  const [newPhone, setNewPhone] = useState("135-792-46-80")
  const [filter, setFilter] = useState("")
  const filteredPersons = persons.filter(person => person.name.includes(filter))

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter}/>
      <h3>Submit New Person</h3>
      <PersonForm persons={persons} newName={newName} newPhone={newPhone} setPersons={setPersons} setNewName={setNewName} setNewPhone={setNewPhone}/>
      <h3>Numbers</h3>
      <Numbers persons={filteredPersons} setPersons={setPersons}/>
      
    </div>
  )
}

export default App