import CVPreview from './components/CVPreview'
import './App.css'
import CVFormEditor from './components/CVFormEditor'
import { useState } from 'react'
import { sampleGeneralInformation } from './data-util'

function App() {
  const [general, setGeneral] = useState(sampleGeneralInformation);

  return (
    <div className="container">
      <CVFormEditor></CVFormEditor>
      <CVPreview generals={general}></CVPreview>
    </div>
  )
}

export default App
