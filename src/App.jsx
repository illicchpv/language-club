/* eslint-disable no-unused-vars */
import './App.css'
import { useState } from 'react'
import {InitPoint} from './modules/InitPoint';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App'>
      <InitPoint/>
    </div>
)
}

export default App
