import { useState } from "react"

export default function EducationDetails(educationDetails, setEducationDetails) {
    console.log(educationDetails)
    const [showForm, setShowForm] = useState('none')

    function showFormHandler() {
        if(showForm == 'flex')
            setShowForm('none')
        else
            setShowForm('flex')
    }

    function submitHandler(e) {
        e.preventDefault()
        const school = document.querySelector('#school').value
        const degree = document.querySelector('#degree').value
        const schoolLocation = document.querySelector('#school-location').value
        const schoolStartDate = document.querySelector('#school-start-date').value
        const schoolEndDate = document.querySelector('#school-start-date').value

        console.log(school, degree, schoolLocation, schoolStartDate, schoolEndDate)
    }
    
    return (
        <>
            <div className="card">
                <div className="heading-container">
                    <h2 className="heading">Education Details</h2>
                    <img className={showForm} src="chevron-up.svg" alt="chevron-up" width={20} onClick={showFormHandler}/>
                </div>
                <form className="education-details-form" style={{display: showForm}}>
                    <label htmlFor="school">School</label>
                    <input type="text" id="school" name="school"/>
                    <label htmlFor="degree">Degree</label>
                    <input type="text" id="degree" name="degree"/>
                    <label htmlFor="school-location">Location</label>
                    <input type="text" id="school-location" name="school-location"/>
                    <div className="start-end-container">
                        <div className="start-container">
                            <label htmlFor="school-start-date">Start Date</label>
                            <input type="date" id="school-start-date" name="school-start-date"/>
                        </div>
                        <div className="end-container">
                            <label htmlFor="school-end-date">End Date</label>
                            <input type="date" id="school-end-date" name="school-end-date"/>
                        </div>
                    </div>
                    <div className="buttons-container">
                        <button type="reset">Reset</button>
                        <button type="submit" onClick={submitHandler}>Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}