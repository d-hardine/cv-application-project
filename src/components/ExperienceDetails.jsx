export default function ExperienceDetails() {
    return (
        <>
            <div className="card">
                <h2 className="heading">Experience Details</h2>
                <form className="education-details-form" id="education-details-form">
                    <label htmlFor="company-name">Company Name</label>
                    <input type="text" id="company-name" name="company-name"/>
                    <label htmlFor="position-title">Position Title</label>
                    <input type="text" id="position-title" name="position-title"/>
                    <label htmlFor="work-location">Location</label>
                    <input type="text" id="work-location" name="work-location"/>
                    <div className="start-end-container">
                        <div className="start-container">
                            <label htmlFor="work-start-date">Start Date</label>
                            <input type="date" id="work-start-date" name="work-start-date"/>
                        </div>
                        <div className="end-container">
                            <label htmlFor="work-end-date">End Date</label>
                            <input type="date" id="work-end-date" name="work-end-date"/>
                        </div>
                    </div>
                    <label htmlFor="job-description">Description</label>
                    <textarea name="job-description" id="job-description" rows={4}></textarea>
                    <div className="buttons-container">
                        <button type="reset">Reset</button>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}