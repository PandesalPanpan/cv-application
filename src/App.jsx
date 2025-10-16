import CVPreview from './components/CVPreview'
import './App.css'
import CVFormEditor from './components/CVFormEditor'
import { useState } from 'react'
import { sampleGeneralInformation, sampleEducations, sampleCompanies } from './data-util'

function App() {
  const [general, setGeneral] = useState(sampleGeneralInformation);
  const [educations, setEducations] = useState(sampleEducations);
  const [companies, setCompanies] = useState(sampleCompanies);

  const handleSectionSave = (event, section) => {
    event.preventDefault();

    console.log(`Section: ${section}`);
    const fd = new FormData(event.currentTarget);
    const data = Object.fromEntries(fd);

    switch(section) {
      case 'general': 
        setGeneral((prev) => ({...prev, ...data}));
        break;
      case 'education':
        setEducations((prev) => ({...prev, ...data}));
        break;
      case 'experience':
        setCompanies((prev) => ({...prev, ...data}));
        break;
      default:
        break;
      }
  }

  return (
    <div className="container">
      <CVFormEditor
        handleSectionSave={handleSectionSave}
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
