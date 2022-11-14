const Header = ({name}) => <h2>{name}</h2>

const Content = ({parts}) => {
  return (
    <div>
    {parts.map(part => 
      <Part key={part.id} part={part} />)}
    </div>
  )
}

const Total = ({parts}) => {
  const exercises = parts.map(part => part.exercises)
  const initialValue = 0
  const exercisesTotal = exercises.reduce((previous, current) => previous + current, initialValue)
  return (
    <>
    <b>Total of {exercisesTotal} exercises</b>
    </>
  )
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Course = ({course}) => {
  return (
  <div>
    <Header name={course.name} />
    <Content parts={course.parts} />
    <Total parts={course.parts} />
  </div>
  )
}

export default Course