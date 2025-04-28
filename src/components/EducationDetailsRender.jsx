export default function EducationDetailsRender({educationDetails}) {
    return (
        <div className="rendered-container">
            <h2 className="rendered-title">Education</h2>
            {educationDetails.map((detail) => (
                <div className="rendered-content" key={detail.id}>
                    <div className="smaller-side">
                        <div>{detail.schoolStartDate} - {detail.schoolEndDate}</div>
                        <div>{detail.schoolLocation}</div>
                    </div>
                    <div className="larger-side">
                        <div className="school-rendered-detail">{detail.school}</div>
                        <div className="degree-rendered-detail">{detail.degree}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}