import GeneralForm from './components/GeneralForm'
import CVPreview from './components/CVPreview'
import './App.css'
import CVFormEditor from './components/CVFormEditor'

function App() {

  return (
    <div className="container">
      <CVFormEditor></CVFormEditor>
      <CVPreview></CVPreview>
    </div>
  )
}

export default App
