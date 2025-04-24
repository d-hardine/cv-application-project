export default function PersonalDetails({dataDetails, setDataDetails}) {
    function handleChange(e) {
        const label = e.target.name
        const updatedDataDetails = {...dataDetails, [label]: e.target.value} //[label] is for dynamic label picker
        setDataDetails(updatedDataDetails)
    }

    return (
        <div className="card">
            <h2 className="heading">Personal Details</h2>
            <form className="personal-details-form">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="firstName" value={dataDetails.firstName} onChange={handleChange}/>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="lastName" value={dataDetails.lastName} onChange={handleChange}/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" value={dataDetails.email} onChange={handleChange}/>
                <label htmlFor="phone-number">Phone Number</label>
                <input type="tel" id="phone-number" name="phoneNumber" value={dataDetails.phoneNumber} onChange={handleChange}/>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address" value={dataDetails.address} onChange={handleChange}/>
            </form>
        </div>
    )
}