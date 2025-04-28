export default function PersonalDetailsRender({dataDetails}) {
    const fullName = `${dataDetails.firstName} ${dataDetails.lastName}`

    return (
        <div className="personal-detail-rendered">
            <h1 className="full-name-render">{fullName}</h1>
            <div className="contact-container">
                <img src="email.svg" alt="email-image" width={30} />
                <div className="email-render">{dataDetails.email}</div>
                <img src="phone.svg" alt="phone-image" width={30} />
                <div className="phone-number-render">{dataDetails.phoneNumber}</div>
                <img src="map-marker.svg" alt="location-image" width={30}/>
                <div className="address-render">{dataDetails.address}</div>
            </div>
        </div>
    )
}