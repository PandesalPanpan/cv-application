import { useState } from 'react'
import GeneralInformation from './components/GeneralInformation'
import CVPreview from './components/CVPreview'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <GeneralInformation></GeneralInformation>
      <CVPreview></CVPreview>
    </div>
  )
}

export default App
