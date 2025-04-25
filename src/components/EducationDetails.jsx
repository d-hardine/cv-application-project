import { useState } from "react"

export default function EducationDetails({educationDetails, setEducationDetails}) {

    const [isExpanded, setIsExpanded] = useState(false)
    const [newEntryFormIndex, setNewEntryFormIndex] = useState(0)

    function isExpandedHandler() {
        setIsExpanded(!isExpanded)
    }

    function submitHandler(e) { //handle detail submission and add to the education details
        e.preventDefault()
        const school = document.querySelector('#school').value
        const degree = document.querySelector('#degree').value
        const schoolLocation = document.querySelector('#school-location').value
        const schoolStartDate = document.querySelector('#school-start-date').value
        const schoolEndDate = document.querySelector('#school-start-date').value
        const id = crypto.randomUUID()

        const newEducationDetails = {school, degree, schoolLocation, schoolStartDate, schoolEndDate, id}

        setEducationDetails([
            ...educationDetails, newEducationDetails
        ])
        e.target.reset() //clear the form
        setNewEntryFormIndex(0) //close the form
    }

    function deleteHandler(detailToDelete) { //handle detail deletion
        setEducationDetails(educationDetails.filter(detail => detail !== detailToDelete))
    }

    function sampleHandler() {
        const sampleEducationDetails = [
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
        ]
        setEducationDetails(sampleEducationDetails)
    }

    return (
        <>
            <div className="card">
                <div className="heading-container">
                    <h2 className="heading">Education Details</h2>
                    <img className={'chevron-image' + ' ' + (isExpanded ? 'expanded' : 'not-expanded')} src="chevron-down.svg" alt="chevron-down" title="click to expand/shrink" width={20} style={{transform: '180deg'}} onClick={isExpandedHandler}/>
                </div>
                <div className="content-container" style={isExpanded ? {display: 'flex'} : {display: 'none'}}>
                    <div className="data-container" style={newEntryFormIndex === 0 ? {display: 'block', flexDirection: 'column'} : {display: 'none'}}>
                        <ul>
                            {educationDetails.map((detail) => {
                                return (
                                    <li key={detail.id} className="school-list">
                                        {detail.school}
                                        <img src="delete-outline.svg" alt="delete button" title="delete" width={30} onClick={() => deleteHandler(detail)}/>
                                    </li>
                                )})}
                        </ul>
                        <div className="buttons-container">
                            <button onClick={()=> {setNewEntryFormIndex(1)}}>New Entry</button>
                            <button onClick={sampleHandler}>Sample</button>
                        </div>
                    </div>
                    <form onSubmit={submitHandler} className="education-details-form" style={newEntryFormIndex === 1 ? {display: 'flex'} : {display: 'none'}}>
                        <label htmlFor="school">School</label>
                        <input type="text" id="school" name="school" required/>
                        <label htmlFor="degree">Degree</label>
                        <input type="text" id="degree" name="degree" required/>
                        <label htmlFor="school-location">Location</label>
                        <input type="text" id="school-location" name="school-location" required/>
                        <div className="start-end-container">
                            <div className="start-container">
                                <label htmlFor="school-start-date">Start Date</label>
                                <input type="date" id="school-start-date" name="school-start-date" required/>
                            </div>
                            <div className="end-container">
                                <label htmlFor="school-end-date">End Date</label>
                                <input type="date" id="school-end-date" name="school-end-date" required/>
                            </div>
                        </div>
                        <div className="buttons-container">
                            <button type="reset">Reset</button>
                            <button type="submit">Submit</button>
                            <button type="button" onClick={()=> {setNewEntryFormIndex(0)}}>Close</button>
                    </div>
                </form>
                </div>
            </div>
        </>
    )
}