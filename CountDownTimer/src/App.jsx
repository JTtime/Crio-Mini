import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DateRangePicker from './sharedComponents/DateRange'
import LandingPage from './main/LandingPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <DateRangePicker/> */}
    <LandingPage/>
      
    </>
  )
}

export default App
