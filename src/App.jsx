import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   const [todos, setTodos] = React.useState([{
    title:"go to the gym" + Math.random()*10,
    description:"train arms",
    id:1    
   },
  {
    title:"go to the class",
    description:"take coding classes from harkirat",
    id:2
  }])

   setInterval(()=>{
    setTodos({
      id:"eat lunch",
      description:"cook and then eat lunch",
      id:3 
     })
   },2000)

  return (
    <>
      <h1>Hello there</h1>
      {todos.title}
      {todos.description}
      {todos.id}
      <p>my name is bhaskar</p>
      <PersonName firstName= {todos.title} lastName={"Wayne"}/>
    </>
  )
 
}

function PersonName (){
  return
    <div>
       {props.firstName}
      
    </div>
  
}

export default App
