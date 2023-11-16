const Hello = (props) => {
  return (
    <div>
      <p>Hello world {props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='George' />
      <Hello name='Paul' />

      <Hello /> 
      <Hello />
      <Hello /> 
       </div>
  )
}


export default App
