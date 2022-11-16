import { useState } from 'react'

const Name = ({name, number}) => {
  return (
    <p>{name} {number}</p>
  )
}

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filterString, setFilterString] = useState('')
  const [showAll, setShowAll] = useState(true)

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
      <form>
        <div>
          filter shown with:&nbsp;
          <input
            value={filterString}
            onChange={handleFilterChange} />
        </div>
      </form>
      <h2>Add a new contact</h2>
      <form onSubmit={addName}>
        <div>
          name:&nbsp;
          <input 
            value={newName} 
            onChange={handleNameChange} />
          <br />
          number:&nbsp;
          <input 
            value={newNumber} 
            onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {namesToShow.map(person => <Name key={person.name} name={person.name} number={person.number}/>)}
    </div>
  )

}

export default App