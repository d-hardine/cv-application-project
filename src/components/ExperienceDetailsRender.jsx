export default function ExperienceDetailsRender({experienceDetails}) {
    return (
        <div className="experience-detail-rendered">
            {experienceDetails.map((detail) => (
                <div key={detail.id}>
                    <div>{detail.companyName}</div>
                    <div>{detail.positionTitle}</div>
                    <div>{detail.workLocation}</div>
                    <div>{detail.workStartDate}</div>
                    <div>{detail.workEndDate}</div>
                    <div>{detail.jobDescription}</div>
                </div>
            ))}
        </div>
    )
}