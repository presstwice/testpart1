
  const Header = () => {
    const course = 'Half Stack application development'
  }

  const Content = () => {
    const part1 = 'Fundementals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14
  }

  const Total = () => {
    {exercises1} + {exercises2} + {exercises3}
  

  return (
    <div>
      <Header course={course} />
    </div>
  )
  }

export default App
