export default function ExperienceDetailsRender({experienceDetails}) {
    return (
        <div className="rendered-container">
            <h2 className="rendered-title">Experience</h2>
            {experienceDetails.map((detail) => (
                <div className="rendered-content" key={detail.id}>
                    <div className="smaller-side">
                        <div>{detail.workStartDate} - {detail.workEndDate}</div>
                        <div>{detail.workLocation}</div>
                    </div>
                    <div className="larger-side">
                        <div>{detail.companyName}</div>
                        <div className="position-title-rendered">{detail.positionTitle}</div>
                        <div>{detail.jobDescription}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}