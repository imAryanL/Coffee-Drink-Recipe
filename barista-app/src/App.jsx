import BaristaForm from './Components/BaristaForm';
import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
<div>
  <div className="title-container">
    <img src="./src/assets/milkk.png" alt="Milk Cart" className="title-image"/>
    <h1 className="title">On My Grind</h1>
    <p>So you think you can barista? Let's put that to the test...</p>
    <h5>Aryan Lakhani  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    Z Number- Z23724811</h5>
  </div>
  <BaristaForm />
</div>
  )
}

export default App
