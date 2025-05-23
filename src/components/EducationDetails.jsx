import { useState } from "react"
let idCache = '' //important, to save the would be edited detail id

export default function EducationDetails({educationDetails, setEducationDetails}) {

    const [isExpanded, setIsExpanded] = useState(false)
    const [newEntryFormIndex, setNewEntryFormIndex] = useState(0)
    const [isEditMode, setIsEditMode] = useState(false)

    const school = document.querySelector('#school')
    const degree = document.querySelector('#degree')
    const schoolLocation = document.querySelector('#school-location')
    const schoolStartDate = document.querySelector('#school-start-date')
    const schoolEndDate = document.querySelector('#school-end-date')

    function isExpandedHandler() { //handle expand/shrink the education card
        setIsExpanded(!isExpanded)
    }

    function showNewEntryFormHandler() {
        setNewEntryFormIndex(1)
        setIsEditMode(false)

        school.value = ''
        degree.value = ''
        schoolLocation.value = ''
        schoolStartDate.value = ''
        schoolEndDate.value = ''
    }

    function showEditFormHandler(detail) {
        setNewEntryFormIndex(1)
        setIsEditMode(true)

        school.value = detail.school
        degree.value = detail.degree
        schoolLocation.value = detail.schoolLocation
        schoolStartDate.value = detail.schoolStartDate
        schoolEndDate.value = detail.schoolEndDate

        idCache = detail.id
    }


    function submitHandler(e) { //handle detail submission
        e.preventDefault()
        const newEducationDetails = {
            school: school.value,
            degree: degree.value,
            schoolLocation: schoolLocation.value,
            schoolStartDate: schoolStartDate.value,
            schoolEndDate: schoolEndDate.value,
        }

        if(!isEditMode) { //if edit mode is not active
            newEducationDetails.id = crypto.randomUUID()

            //add the new education details
            setEducationDetails([ 
                ...educationDetails, newEducationDetails
            ])
        } else { //if edit mode is active
            newEducationDetails.id = idCache

            //edit the picked details
            setEducationDetails(
                educationDetails.map((detail) =>
                    detail.id === idCache ? { ...detail, ...newEducationDetails } : detail
                )
              )
        }

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
                            {educationDetails.map((educationDetail) => {
                                return (
                                    <li key={educationDetail.id} className="content-list">
                                        {educationDetail.school}
                                        <div className="buttons-container">
                                            <img className="edit-button" src="file-edit-outline.svg" alt="edit button" title="Edit" width={30} onClick={() => showEditFormHandler(educationDetail)}/>
                                            <img className="delete-button" src="delete-outline.svg" alt="delete button" title="Delete" width={30} onClick={() => deleteHandler(educationDetail)}/>
                                        </div>
                                    </li>
                                )})}
                        </ul>
                        <div className="buttons-container">
                            <button onClick={showNewEntryFormHandler}>New Entry</button>
                            <button title="clear all all of the submitted details and fill it with sample education details" onClick={sampleHandler}>Sample</button>
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
                            <button type="submit">{isEditMode ? "Edit" : "Submit"}</button>
                            <button type="button" onClick={()=> {setNewEntryFormIndex(0)}}>Close</button>
                    </div>
                </form>
                </div>
            </div>
        </>
    )
}