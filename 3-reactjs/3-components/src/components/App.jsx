// import MyClassComponent from './MyClassComponent'
// import LifeCycleClassComponent from './LifeCycleClassComponent'
// import LifeCycleFunctionalComponent from './LifeCycleFunctionalComponent'
// import Greeting from './Greeting'

function Button(props) {
  return <button onClick={props.onClick}>Clique aqui!</button>
}

function App() {

  const handleClick = ()=> {
    alert("Botão Clicado!")
  }

  return (
    <>
      <Button onClick={handleClick}/>
    </>
  )
}

export default App
