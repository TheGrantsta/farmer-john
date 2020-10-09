import React from "react"
import CalcCost from "./calcCost"

const TripAdvisor = (props) => {
    let trips = [];

    if (props.numberOfBags > 0 && props.numberOfGeese === 0) {
        buildTripSequenceDisplay(props.numberOfBags, "bag of corn", 1)
    }

    if (props.numberOfBags === 0 && props.numberOfGeese > 0) {
        buildTripSequenceDisplay(props.numberOfGeese, "goose", 1)
    }

    if (props.numberOfBags === 1 && props.numberOfGeese === 1) {
        buildTripSequenceDisplay(props.numberOfGeese, "goose", 1)
        buildTripSequenceDisplay(props.numberOfGeese, "bag of corn", 2)
    }

    function buildTripSequenceDisplay(numberOfTrips, item, tripCount) {
        for (var i = 1; i <= numberOfTrips; i++) {
            trips.push("Trip " + tripCount + ": take " + item + "; come back");
            tripCount++;
        }
    }

    return (
        <div>
            <div>
                <CalcCost numberOfTrips={trips.length} />
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