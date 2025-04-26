import { useState } from "react"
let idCache = '' //important, to save the would be edited detail id

export default function ExperienceDetails({experienceDetails, setExperienceDetails}) {

    const [isExpanded, setIsExpanded] = useState(false)
    const [newEntryFormIndex, setNewEntryFormIndex] = useState(0)
    const [isEditMode, setIsEditMode] = useState(false)

    const companyName = document.querySelector('#company-name')
    const positionTitle = document.querySelector('#position-title')
    const workLocation = document.querySelector('#work-location')
    const workStartDate = document.querySelector('#work-start-date')
    const workEndDate = document.querySelector('#work-end-date')
    const jobDescription = document.querySelector('#job-description')

    function isExpandedHandler() { //handle expand/shrink the education card
        setIsExpanded(!isExpanded)
    }

    function showNewEntryFormHandler() {
        setNewEntryFormIndex(1)
        setIsEditMode(false)

        companyName.value = ''
        positionTitle.value = ''
        workLocation.value = ''
        workStartDate.value = ''
        workEndDate.value = ''    }

    function showEditFormHandler(detail) {
        setNewEntryFormIndex(1)
        setIsEditMode(true)

        companyName.value = detail.companyName
        positionTitle.value = detail.positionTitle
        workLocation.value = detail.workLocation
        workStartDate.value = detail.workStartDate
        workEndDate.value = detail.workEndDate
        jobDescription.value = detail.jobDescription

        idCache = detail.id
    }

    function submitHandler(e) {
        e.preventDefault()

        const newExperienceDetails = {
            companyName: companyName.value,
            positionTitle: positionTitle.value,
            workLocation: workLocation.value,
            workStartDate: workStartDate.value,
            workEndDate: workEndDate.value,
            jobDescription: jobDescription.value,
        }

        if(!isEditMode) { //if edit mode is not active
            newExperienceDetails.id = crypto.randomUUID()

            //add the new education details
            setExperienceDetails([ 
                ...experienceDetails, newExperienceDetails
            ])
        } else { //if edit mode is active
            newExperienceDetails.id = idCache

            //edit the picked details
            setExperienceDetails(
                experienceDetails.map((detail) =>
                    detail.id === idCache ? { ...detail, ...newExperienceDetails } : detail
                )
              )
        }

        e.target.reset() //clear the form
        setNewEntryFormIndex(0) //close the form
    }

    function deleteHandler(detailToDelete) { //handle detail deletion
        setExperienceDetails(experienceDetails.filter(detail => detail !== detailToDelete))
    }

    function sampleHandler() {
        const sampleExperienceDetails = [
            {
                companyName: "Stark Industries",
                positionTitle: 'Software Developer Intern',
                workLocation: 'Los Santos, SA',
                workStartDate: '2022-02-05',
                workEndDate: '2023-11-10',
                jobDescription: 'Worked on frontend performance optimizations using React. Optimized React components to reduce re-renders, improving page load speed by 35% across the dashboard.',
                id: crypto.randomUUID()
            },
            {
                companyName: "Umbrella Corporation",
                positionTitle: 'Junior Viral Scientist',
                workLocation: 'Racoon City, CA',
                workStartDate: '2023-06-05',
                workEndDate: '2024-12-10',
                jobDescription: 'Worked on frontend performance optimizations using React. Optimized React components to reduce re-renders, improving page load speed by 35% across the dashboard.',
                id: crypto.randomUUID()
            }
        ]
        setExperienceDetails(sampleExperienceDetails)
    }
    
    return (
        <>
            <div className="card">
                <div className="heading-container">
                    <h2 className="heading">Experience Details</h2>
                    <img className={'chevron-image' + ' ' + (isExpanded ? 'expanded' : 'not-expanded')} src="chevron-down.svg" alt="chevron-down" title="click to expand/shrink" width={20} style={{transform: '180deg'}} onClick={isExpandedHandler}/>
                </div>
                <div className="content-container" style={isExpanded ? {display: 'flex'} : {display: 'none'}}>
                    <div className="data-container" style={newEntryFormIndex === 0 ? {display: 'block', flexDirection: 'column'} : {display: 'none'}}>
                        <ul>
                        {experienceDetails.map((detail) => {
                                return (
                                    <li key={detail.id} className="content-list">
                                        {detail.companyName}
                                        <div className="buttons-container">
                                            <img className="edit-button" src="file-edit-outline.svg" alt="edit button" title="Edit" width={30} onClick={() => showEditFormHandler(detail)}/>
                                            <img className="delete-button" src="delete-outline.svg" alt="delete button" title="Delete" width={30} onClick={() => deleteHandler(detail)}/>
                                        </div>
                                    </li>
                                )})}
                        </ul>
                        <div className="buttons-container">
                            <button onClick={showNewEntryFormHandler}>New Entry</button>
                            <button title="clear all all of the submitted details and fill it with sample experience details" onClick={sampleHandler}>Sample</button>
                        </div>
                    </div>
                    <form onSubmit={submitHandler} className="experience-details-form" style={newEntryFormIndex === 1 ? {display: 'flex'} : {display: 'none'}}>
                        <label htmlFor="company-name">Company Name</label>
                        <input type="text" id="company-name" name="company-name" required/>
                        <label htmlFor="position-title">Position Title</label>
                        <input type="text" id="position-title" name="position-title" required/>
                        <label htmlFor="work-location">Location</label>
                        <input type="text" id="work-location" name="work-location" required/>
                        <div className="start-end-container">
                            <div className="start-container">
                                <label htmlFor="work-start-date">Start Date</label>
                                <input type="date" id="work-start-date" name="work-start-date" required/>
                            </div>
                            <div className="end-container">
                                <label htmlFor="work-end-date">End Date</label>
                                <input type="date" id="work-end-date" name="work-end-date" required/>
                            </div>
                        </div>
                        <label htmlFor="job-description">Description</label>
                        <textarea name="job-description" id="job-description" rows={5} maxLength={400} required></textarea>
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