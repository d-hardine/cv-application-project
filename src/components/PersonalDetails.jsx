import { useState } from "react";

export default function PersonalDetails({firstName, lastName, setFirstName, setLastName}) {
    return (
        <div className="card">
            <h2 className="heading">Personal Details</h2>
            <form className="personal-details-form">
                <label htmlFor="first-name">First Name</label>
                <input type="text" id="first-name" name="first-name" value={firstName} onChange={e => {
                    setFirstName(e.target.value);
                }}/>
                <label htmlFor="last-name">Last Name</label>
                <input type="text" id="last-name" name="last-name" value={lastName} onChange={e => {
                    setLastName(e.target.value);
                }}/>
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email"/>
                <label htmlFor="phone-number">Phone Number</label>
                <input type="tel" id="phone-number" name="phone-number"/>
                <label htmlFor="address">Address</label>
                <input type="text" id="address" name="address"/>
            </form>
        </div>
    )
}