import React from "react"
import "./Location.css"

export const LocationCard = ({ location }) => {
    if (location.handicapAccessible) {
        location.handiMsg = `Our location is handicap accessible!`
    } else {
        location.handiMsg = "We're sorry, we cannot accommodate handicap customers at this time."
    }

    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <address className="location__address">Find us at <strong>{location.address}</strong></address>
            <div className="location__square-footage">Location Size: {location.squareFootage} square feet</div>
            <div className="location__accessibility">{location.handiMsg}</div>
        </section>
    )
}