import { useState } from 'react'
import './styles/App.css'
import Header from './components/Header'
import PersonalDetails from './components/PersonalDetails'
import PersonalDetailsRender from './components/PersonalDetailsRender'
import EducationDetails from './components/EducationDetails'
import EducationDetailsRender from './components/EducationDetailsRender'
import ExperienceDetails from './components/ExperienceDetails'
import ExperienceDetailsRender from './components/ExperienceDetailsRender'

function App() {
  const [dataDetails, setDataDetails] = useState({
    firstName: 'Peter',
    lastName: 'Parker',
    email: 'not.spiderman@email.com',
    phoneNumber: '555 90942',
    address: '31st Mount Olympus, Mars',
  })

  const [educationDetails, setEducationDetails] = useState([
    {
      school: 'Nanyang Technological University',
      degree: 'B.Sc in Electrical Engineering',
      schoolLocation: 'Singapore',
      schoolStartDate: '2014-04-20',
      schoolEndDate: '2018-01-23',
      id: crypto.randomUUID()
    },
    {
      school: 'Bandung Institute of Technology',
      degree: 'M.Sc in Computer Science',
      schoolLocation: 'Indonesia',
      schoolStartDate: '2019-06-22',
      schoolEndDate: '2021-04-13',
      id: crypto.randomUUID()
    }
  ])

  const [experienceDetails, setExperienceDetails] = useState([
    {
      companyName: "Stark Industries",
      positionTitle: 'Software Developer Intern',
      workLocation: 'Los Santos, SA',
      workStartDate: '2022-02-05',
      workEndDate: '2023-11-10',
      jobDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iste laborum cum! Quidem aspernatur omnis neque assumenda vitae voluptatibus.",
      id: crypto.randomUUID()
    },
    {
      companyName: "Umbrella Corporation",
      positionTitle: 'Junior Virologist',
      workLocation: 'Racoon City, CA',
      workStartDate: '2023-06-05',
      workEndDate: '2024-12-10',
      jobDescription: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt veniam rem sunt aut quos quidem fugit qui dolor, culpa dolore eius commodi dolorum, illum amet omnis expedita quo explicabo mollitia?',
      id: crypto.randomUUID()
    }
  ])

  return (
    <>
      <Header />
      <main>
        <div className="left-side">
          <PersonalDetails dataDetails={dataDetails} setDataDetails={setDataDetails}/>
          <EducationDetails educationDetails={educationDetails} setEducationDetails={setEducationDetails}/>
          <ExperienceDetails experienceDetails={experienceDetails} setExperienceDetails={setExperienceDetails}/>
        </div>
        <div className="right-side">
          <PersonalDetailsRender dataDetails={dataDetails}/>
          <EducationDetailsRender educationDetails={educationDetails}/>
          <ExperienceDetailsRender experienceDetails={experienceDetails}/>
        </div>
      </main>
    </>
  )
}

export default App
