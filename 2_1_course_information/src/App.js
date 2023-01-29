const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Content = (props) => {
  let partshtml = []
  for (var i=0; i<props.parts.length; i++) {
    partshtml.push(<Part part={props.parts[i]} key={i}/>);
    
  }
  
  return (

    
    <div>

     
{partshtml}
    
    </div>
  )
}

const Total = (props) => {
  return (
   <p> Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
  )
}


const Part = (props) => {
  return (
    <p>
    {props.part.name} {props.part.exercises}
    </p>
  )
}

const Course = (props) => {
  return (
    <div>

   <Header course={props.course.name} />
   <Content parts={props.course.parts} />
   <Total parts={props.course.parts} />
    
           
  </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
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
      }
    ]
  }

  return <Course course={course} />
}

  // return (
  //   <div>

  //     <Header course={course.name} />
  //     <Content  parts={course.parts} />
  //     <Total parts={course.parts} />
    
           
  //   </div>
  // )


export default App