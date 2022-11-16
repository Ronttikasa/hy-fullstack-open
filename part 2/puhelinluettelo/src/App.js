import { useEffect, useState } from 'react'
import FilterForm from './components/FilterForm'
import ContactForm from './components/ContactForm'
import ShowNumbers from './components/ShowNumbers'
import axios from 'axios'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterString, setFilterString] = useState('')

  useEffect(() => {
    axios.get('http://localhost:3001/persons')
      .then(response => {
        setPersons(response.data)
      })
    }, [])

  const addName = (event) => {
    event.preventDefault()
    if (persons.find(item => item.name === newName)) {
      alert(`${newName} is already added to the phonebook`)
    } else {
      const nameObject = {
        name: newName,
        number: newNumber
      }
      setPersons(persons.concat(nameObject))
      setNewName('')
      setNewNumber('')
      setFilterString('')
    }
    }

  const namesToShow = filterString
    ? persons.filter(person => person.name.toLowerCase().includes(filterString.toLowerCase()))
    : persons

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilterString(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
        <FilterForm filter={filterString} handler={handleFilterChange} />
      <h2>Add a new contact</h2>
        <ContactForm 
          name={newName} 
          number={newNumber} 
          namehandler={handleNameChange} 
          nbhandler={handleNumberChange} 
          phonebookhandler={addName} />
      <h2>Numbers</h2>
        <ShowNumbers namesToShow={namesToShow} />
    </div>
  )

}

export default App