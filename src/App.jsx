import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
   var todos =[{
    title:"go to the gym",
    description:"do arm workout",
    id:1 
   },
  {
    title:"go shopping",
    description:"go to the mall and buy an iPhone",
    id:2
  }]  

  return (
    <>
      <h1>Hello there</h1>
      <h1>{todos.title }
      { todos.description}
      { todos.id}</h1>
    </>
  )
}

export default App
