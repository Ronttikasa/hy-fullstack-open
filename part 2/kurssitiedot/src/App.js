const Header = ({name}) => <h1>{name}</h1>

const Content = ({parts}) => {
  return (
    <div>
    {parts.map(part => 
      <Part key={part.id} part={part} />)}
    </div>
  )
}

const Total = (props) => {
  return (
    <>
    Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
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
  </div>
  )
}

const App = () => {
  console.log('test')
  const course = {
    name: 'Half Stack application development',
    id: 1,
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'What the heck is javascript',
        exercises: 25,
        id: 4
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}
  
export default App

