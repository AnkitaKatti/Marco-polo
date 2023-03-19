import React from 'react'
import '../styles/App.css';
import { useState } from 'react';

const [head,setHead]= useState('Marco')
const [button,setButton] = useState('Polo')
const [toggle ,SetToggle]= useState(true)
const App = () => {
  
  return (
    <div id="main">
      Value :: {toggle ? {head}:{button}}
    <h1 id ="marco-polo">Marco</h1>
    <button id="marco-polo-toggler" onClick={()=>{
        setHead("polo")
        setButton("Marco")
        SetToggle((prevvalue)=>{
          return !(prevvalue)
        })
      }}>polo</button>
    </div>
  )
}


export default App;
