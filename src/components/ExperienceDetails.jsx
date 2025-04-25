import { useState } from "react"

export default function ExperienceDetails({experienceDetails, setExperienceDetails}) {

    const [isExpanded, setIsExpanded] = useState(false)
    const [newEntryFormIndex, setNewEntryFormIndex] = useState(0)

    function isExpandedHandler() { //handle expand/shrink the education card
        setIsExpanded(!isExpanded)
    }

    function submitHandler(e) {
        e.preventDefault()
        const companyName = document.querySelector('#company-name').value
        const positionTitle = document.querySelector('#position-title').value
        const workLocation = document.querySelector('#work-location').value
        const workStartDate = document.querySelector('#work-start-date').value
        const workEndDate = document.querySelector('#work-end-date').value
        const jobDescription = document.querySelector('#job-description').value
        const id = crypto.randomUUID()

        const newExperienceDetails = {companyName, positionTitle, workLocation, workStartDate, workEndDate, jobDescription, id}

        setExperienceDetails([
            ...experienceDetails, newExperienceDetails
        ])
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
                                        <img className="delete-button" src="delete-outline.svg" alt="delete button" title="delete" width={30} onClick={() => deleteHandler(detail)}/>
                                    </li>
                                )})}
                        </ul>
                        <div className="buttons-container">
                            <button onClick={()=> {setNewEntryFormIndex(1)}}>New Entry</button>
                            <button onClick={sampleHandler}>Sample</button>
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
                            <button type="submit">Submit</button>
                            <button type="button" onClick={()=> {setNewEntryFormIndex(0)}}>Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}