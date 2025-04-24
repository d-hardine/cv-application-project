import { useState } from "react"

export default function EducationDetails() {
    const [showForm, setShowForm] = useState(true)

    function showFormHandler() {
        console.log('hasdklkj')
    }
    
    return (
        <>
            <div className="card">
                <div className="heading-container">
                    <h2 className="heading">Education Details</h2>
                    <img className="chevron-image" src="chevron-up.svg" alt="chevron-up" width={20} onClick={showFormHandler}/>
                </div>
                <form className="education-details-form">
                    <label htmlFor="school">School</label>
                    <input type="text" id="school" name="school"/>
                    <label htmlFor="degree">Degree</label>
                    <input type="text" id="degree" name="degree"/>
                    <label htmlFor="shcool-location">Location</label>
                    <input type="text" id="shcool-location" name="shcool-location"/>
                    <div className="start-end-container">
                        <div className="start-container">
                            <label htmlFor="school-start-date">Start Date</label>
                            <input type="date" id="school-start-date" name="school-start-date"/>
                        </div>
                        <div className="end-container">
                            <label htmlFor="end-date">End Date</label>
                            <input type="date" id="school-end-date" name="school-end-date"/>
                        </div>
                    </div>
                    <div className="buttons-container">
                        <button type="reset">Reset</button>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}