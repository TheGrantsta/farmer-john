import React from "react"
import TripSteps from "./tripSteps"
import CalcCost from "./calcCost"

const TripAdvisor = (props) => {
    let trips = [];
    var steps = new TripSteps(props.numberOfBags, props.numberOfGeese);

    if (steps.IsValid) {
        if (steps.Repeat > 0) {
            for (var i = 1; i <= steps.Repeat; i++) {
                trips.push("Trip " + i + ": " + steps.Sequence);
            }
        } else {
            if (steps.Sequence.length > 0) {
                steps.Sequence.split("|").map((item, i) => {
                   return trips.push("Trip " + (i + 1) + ": " + item);
                })
            }
        }
    } else {
        trips.push(steps.Sequence);
    }

    return (
        <div>
            <div>
                <CalcCost isValid={steps.IsValid} numberOfTrips={trips.length} />
            </div>
            <div data-testid="Trip-Sequence">
                {
                    trips.map((item, i) => {
                        return <p key={i}>{item}</p>
                    })
                }
            </div>
        </div>
    )
}

export default TripAdvisor