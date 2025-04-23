import { useState } from 'react'
import viteLogo from '/vite.svg' //public folder
import './App.css'
import Header from './components/Header'
import PersonalDetails from './components/PersonalDetails'
import PersonalDetailsRender from './components/PersonalDetailsRender'


function App() {

  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Wick');
  
  return (
    <>
      <Header />
      <main>
        <div className="left-side">
          <PersonalDetails firstName={firstName} lastName={lastName} setFirstName={setFirstName} setLastName={setLastName}/>
        </div>
        <div className="right-side">
          <PersonalDetailsRender firstName={firstName} lastName={lastName}/>
        </div>
      </main>
    </>
  )
}

export default App
