import { useEffect, useState } from 'react'
import Numbers from './Numbers'
import Filter from './Filter'
import PersonForm from './PersonForm'
import personService from "./services/persons"
import Notification from './Notification'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('Alan Turing')
  const [newPhone, setNewPhone] = useState("135-792-46-80")
  const [filter, setFilter] = useState("")
  const [message, setMessage] = useState()
  const [type, setType] = useState()
  const filteredPersons = persons.filter(person => person.name.includes(filter))

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} type={type}/>
      <Filter filter={filter} setFilter={setFilter}/>
      <h3>Submit New Person</h3>
      <PersonForm persons={persons} newName={newName} newPhone={newPhone} message={message} type={type} setPersons={setPersons} setNewName={setNewName} setNewPhone={setNewPhone} setMessage={setMessage} setType={setType}/>
      <h3>Numbers</h3>
      <Numbers persons={filteredPersons} setPersons={setPersons}/>
      
    </div>
  )
}

export default App