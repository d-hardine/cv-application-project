import { useState } from 'react'
import viteLogo from '/vite.svg' //public folder
import './styles/App.css'
import Header from './components/Header'
import PersonalDetails from './components/PersonalDetails'
import PersonalDetailsRender from './components/PersonalDetailsRender'
import EducationDetails from './components/EducationDetails'
import ExperienceDetails from './components/ExperienceDetails'

function App() {
  const [dataDetails, setDataDetails] = useState({
    firstName: 'Peter',
    lastName: 'Parker',
    email: 'not.spiderman@email.com',
    phoneNumber: '555 90942',
    address: '31st Mount Olympus, Mars'
  })

  return (
    <>
      <Header />
      <main>
        <div className="left-side">
          <PersonalDetails dataDetails={dataDetails} setDataDetails={setDataDetails}/>
          <EducationDetails />
          <ExperienceDetails />
        </div>
        <div className="right-side">
          <PersonalDetailsRender dataDetails={dataDetails}/>
        </div>
      </main>
    </>
  )
}

export default App
