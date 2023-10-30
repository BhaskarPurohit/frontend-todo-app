import React,{ useState } from 'react'
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

  React.useEffect(()=>{
    setInterval(()=>{
      setTodos({
       title:"cook"+ Math.random()*10,
       description:"cook dinner for today",
       id:1
 
      })
   },2000)
  },[])

 

  return (
    
      <div>
        {todos.title}
        {todos.description}
      </div> 
    
  )
 
}

function Todos(props){
  return <div>
    {props.title}
    {props.description}
  </div>
}

export default App
