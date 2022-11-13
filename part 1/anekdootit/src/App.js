import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.'
  ]

  const [points, setPoints] = useState(Array(7).fill(0))
   
  const [selected, setSelected] = useState(0)

  const drawRandomIndex = (max) => {
    let number = Math.floor(Math.random() * max)
    return (number)
  }

  const pickAnecdote = (max) => {
    setSelected(drawRandomIndex(max))
  }

  const handleVote = (idx) => {
    const copy = [...points]
    copy[idx] += 1
    setPoints(copy)
  }

  const findMaxPoints = () => {
    const max_value = Math.max(...points)
    const idx = points.indexOf(max_value)
    return (idx)
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected]}</p>
      has {points[selected]} votes
      <p>
        <button onClick={() => pickAnecdote(anecdotes.length)}>next anecdote</button>
        <button onClick={() => handleVote(selected)}>vote</button>
      </p>
      <h1>Anecdote with the most votes</h1>
      <p>{anecdotes[findMaxPoints()]}</p>
      has {points[findMaxPoints()]} votes
    </div>
  )
}

export default App