import { useState } from 'react'
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
    address: '31st Mount Olympus, Mars',
  })

  const [educationDetails, setEducationDetails] = useState([{
    school: 'Nanyang Technological University',
    degree: 'B.Sc in Electrical Engineering',
    schoolLocation: 'Singapore',
    schoolStartDate: '2014-04-20',
    schoolEndDate: '2018-01-23',
  }])

  return (
    <>
      <Header />
      <main>
        <div className="left-side">
          <PersonalDetails dataDetails={dataDetails} setDataDetails={setDataDetails}/>
          <EducationDetails educationDetails={educationDetails} setEducationDetails={setEducationDetails}/>
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
