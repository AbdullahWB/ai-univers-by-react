import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header/Header'
import Button from './Component/Button/Button'
import Card from './Component/Card/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <Button>Sort By Date</Button>
      <Card></Card>
      <Button>See More</Button>
    </>
  )
}

export default App
