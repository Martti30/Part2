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
    const total = props.parts.reduce((s, p) => {
      console.log('what is happening', s, p)
      return s + p.exercises
    }, 0)
    return (
     <h4> Total of {total} exercises </h4>
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

  export default Course