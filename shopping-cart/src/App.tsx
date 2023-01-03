import { useEffect, useReducer, useState } from 'react' 
import './App.css'
import {  reducer } from './features/reducer'
import Cart from './pages/Cart'
import Home from './pages/Home'

function App() { 

  const [data,setData] = useState([])
  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
      .then((res)=> res.json())
      .then((data)=>setData(data))
  },[]) 

  const [state,dispatch] = useReducer(reducer,{cart:[]})
  console.log(state)
  return (
    <div className="App">
       <Home products={data} state={state} dispatch={dispatch}/>
       <Cart state={state} dispatch={dispatch}/>
    </div>
  )
}

export default App
