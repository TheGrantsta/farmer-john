import React from "react"

const TripAdvisor = (props) => {
    let trips = [];

    if (props.numberOfBags > 0 && props.numberOfGeese === 0) {
        for (var i = 1; i <= props.numberOfBags; i++) {
            trips.push("Trip " + i + ": take bag of corn; come back");
        }
    }

    return (
        <div>
            {
                trips.map((item, i) => {
                    return <p key={i}>{item}</p>
                })
            }
        </div>
    )
}

export default TripAdvisor