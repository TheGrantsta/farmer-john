import React from "react"

const TripAdvisor = (props) => {
    function calculateTrips() {
        if (props.numberOfBags === 0 && props.numberOfGeese === 0){
            return "";
        }
    }

    return (
        <div>{calculateTrips()}</div>
    )
}

export default TripAdvisor