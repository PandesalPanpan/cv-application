import CVPreview from './components/CVPreview'
import './App.css'
import CVFormEditor from './components/CVFormEditor'
import { useState } from 'react'
import { sampleGeneralInformation, sampleEducations, sampleCompanies } from './data-util'

function App() {
  const [general, setGeneral] = useState(sampleGeneralInformation);
  const [educations, setEducations] = useState(sampleEducations);
  const [companies, setCompanies] = useState(sampleCompanies);

  const handleGeneralSave = (event) => {
    event.preventDefault();
    const fd = new FormData(event.currentTarget);
    const data = Object.fromEntries(fd);
    setGeneral({ ...data })
  }

  return (
    <div className="container">
      <CVFormEditor
        handleGeneralSave={handleGeneralSave}
      />
      <CVPreview
        generals={general}
        educations={educations}
        companies={companies}
      />
    </div>
  )
}

export default App
