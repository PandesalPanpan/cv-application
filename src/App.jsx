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
    const fd = new FormData(event.currentTarget);
    const data = Object.fromEntries(fd);
    switch (section) {
      case 'general':
        setGeneral((prev) => ({ ...prev, ...data }));
        break;
      case 'education':
        const schoolids = fd.getAll('id');
        const schools = fd.getAll('school');
        const schoolDates = fd.getAll('date');
        const courses = fd.getAll('course');
        const schoolItems = schoolids.map((schoolid, index) => ({
          id: schoolid,
          school: schools[index],
          date: schoolDates[index],
          course: courses[index]
        }))

        setEducations(schoolItems);
        break;
      case 'experience':
        const experienceIds = fd.getAll('id');
        const companies = fd.getAll('company');
        const companyPosition = fd.getAll('position');
        const companyDates = fd.getAll('date');
        const responsibilityOne = fd.getAll('responsibility-1');
        const responsibilityTwo = fd.getAll('responsibility-2');
        const responsibilityThree = fd.getAll('responsibility-3');
        const companyItems = experienceIds.map((experienceId, index) => ({
          id: experienceId,
          company: companies[index],
          date: companyDates[index],
          position: companyPosition[index],
          responsibilities: [responsibilityOne[index], responsibilityTwo[index], responsibilityThree[index]],
        }))
        debugger;
        setCompanies(companyItems);
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
