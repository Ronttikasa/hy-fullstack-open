import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  )
}

const StatisticLine = ({text, value, unit}) => {
  return (
    <div>
      {text} {value} {unit}
    </div>
  )
}

const Statistics = ({good, neutral, bad}) => {
  let total = good + neutral + bad
  let avg = (good - bad) / total
  let positive = good / total
  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      <StatisticLine text="good" value={good} unit="" />
      <StatisticLine text="neutral" value={neutral} unit="" />
      <StatisticLine text="bad" value={bad} unit="" />
      <StatisticLine text="all" value={total} unit="" />
      <StatisticLine text="average" value={avg} unit="" />
      <StatisticLine text="positive" value={positive} unit="%" />
    </div>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App