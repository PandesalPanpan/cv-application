import CVPreview from './components/CVPreview'
import './App.css'
import CVFormEditor from './components/CVFormEditor'
import { useState } from 'react'
import { sampleGeneralInformation } from './data-util'

function App() {
  const [general, setGeneral] = useState(sampleGeneralInformation);

  const handleGeneralSave = (event) => {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const data = Object.fromEntries(fd);
    setGeneral({...data})
  }

  return (
    <div className="container">
      <CVFormEditor
      handleGeneralSave={handleGeneralSave}
      
      ></CVFormEditor>
      <CVPreview generals={general}></CVPreview>
    </div>
  )
}

export default App
