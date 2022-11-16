import Name from "./Name"

const ShowNumbers = ({namesToShow}) => {
    return(
      namesToShow.map(person => <Name key={person.name} name={person.name} number={person.number}/>)
    )
  }

export default ShowNumbers