export default function PersonalDetailsRender({dataDetails}) {
    const fullName = `${dataDetails.firstName} ${dataDetails.lastName}`

    return (
        <div className="personal-detail-rendered">
            <div className="full-name-render">{fullName}</div>
            <div className="email-render">{dataDetails.email}</div>
            <div className="phone-number-render">{dataDetails.phoneNumber}</div>
            <div className="address-render">{dataDetails.address}</div>
        </div>
    )
}