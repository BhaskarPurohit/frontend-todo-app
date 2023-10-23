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
      title:"eat lunch",
      description:"cook and then eat lunch",
      id:1 
     })
   },2000)

  return (
    <>
      <div>
        {todos[0].title}
        {todos[0].description}
        <br />
        {todos[1].title}
        {todos[1].description}
      </div>
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
