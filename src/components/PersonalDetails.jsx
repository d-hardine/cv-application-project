export default function PersonalDetails({dataDetails, setDataDetails}) {
    function handleChange(e) {
        const label = e.target.name
        const updatedDataDetails = {...dataDetails, [label]: e.target.value} //[label] is for dynamic label picker
        setDataDetails(updatedDataDetails)
    }

    function clearForm(e) {
        e.preventDefault()
        const clearedDataDetails = {
            ...dataDetails,
                ['firstName']: '',
                ['lastName']: '',
                ['email']: '',
                ['phoneNumber']: '',
                ['address']: '',
        }
        setDataDetails(clearedDataDetails)
    }

    function sampleHandler(e) {
        e.preventDefault()
        const sampleDataDetails = {
            firstName: 'Peter',
            lastName: 'Parker',
            email: 'not.spiderman@email.com',
            phoneNumber: '555 90942',
            address: '31st Mount Olympus, Mars'
        }
        setDataDetails(sampleDataDetails)
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
                <div className="buttons-container">
                    <button onClick={clearForm}>Clear</button>
                    <button onClick={sampleHandler}>Sample</button>
                </div>
            </form>
        </div>
    )
}