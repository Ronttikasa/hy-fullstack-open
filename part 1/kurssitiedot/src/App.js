const Header = (props) => {
  return (
    <>
    {props.name}
    </>
  )
}

const Content = (props) => {
  return (
    <>
    <Part name={props.parts[0].name} count={props.parts[0].exercises} />
    <Part name={props.parts[1].name} count={props.parts[1].exercises} />
    <Part name={props.parts[2].name} count={props.parts[2].exercises} />
    </>
  )
}

const Total = (props) => {
  return (
    <>
    Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}
    </>
  )
}

const Part = (props) => {
  return (
    <>
    <p>{props.name} {props.count}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <h1><Header name={course.name} /></h1>
        <Content parts={course.parts} />
      <p>
        <Total parts={course.parts} />
      </p>
    </div>
  )
}

export default App
