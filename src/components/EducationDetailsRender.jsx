export default function EducationDetailsRender({educationDetails}) {
    return (
        <div className="educaton-detail-rendered">
            {educationDetails.map((detail) => (
                <div key={detail.id}>
                    <div>{detail.school}</div>
                    <div>{detail.degree}</div>
                    <div>{detail.schoolLocation}</div>
                    <div>{detail.schoolStartDate}</div>
                    <div>{detail.schoolEndDate}</div>
                </div>
            ))}
        </div>
    )
}