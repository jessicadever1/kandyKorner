import React, { useState, createContext } from "react"

export const LocationContext = createContext()

export const LocationProvider = (props) => {
    const [locations, setLocations] = useState([])

    const getLocations = () => {
        return fetch(`http://localhost:8080/locations?`)
        .then(res => res.json())
        .then(setLocations)
    }

    const addLocations = (locationObj) => {
        return fetch(`http://localhost:8080/locations?`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(locationObj)
        })
        .then(getLocations)
    }

    return (
        <LocationContext.Provider value={{
            locations, getLocations, addLocations
        }}>
            {props.children}
        </LocationContext.Provider>
    )

}