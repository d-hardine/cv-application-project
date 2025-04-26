export default function EducationDetailsRender({educationDetails}) {
    return (
        <div className="educaton-detail-rendered">
            {educationDetails.map((detail) => (
                <div key={detail.id}>
                    <h2>{detail.school}</h2>
                    <h2>{detail.degree}</h2>
                    <h2>{detail.schoolLocation}</h2>
                    <h2>{detail.schoolStartDate}</h2>
                    <h2>{detail.schoolEndDate}</h2>
                </div>
            ))}
        </div>
    )
}