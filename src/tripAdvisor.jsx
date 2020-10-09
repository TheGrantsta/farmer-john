import React from "react"
import CalcCost from "./calcCost"

const TripAdvisor = (props) => {
    let trips = [];

    if (props.numberOfBags > 0 && props.numberOfGeese === 0) {
        for (var i = 1; i <= props.numberOfBags; i++) {
            trips.push("Trip " + i + ": take bag of corn; come back");
        }
    }

    if (props.numberOfBags === 0 && props.numberOfGeese > 0) {
        for (var i = 1; i <= props.numberOfGeese; i++) {
            trips.push("Trip " + i + ": take goose; come back");
        }
    }

    if (props.numberOfBags === 1 && props.numberOfGeese === 1) {
        let tripCnt = 1
        for (var i = 1; i <= props.numberOfGeese; i++) {
            trips.push("Trip " + tripCnt + ": take goose; come back");
        }
        
        tripCnt++;

        for (var i = 1; i <= props.numberOfBags; i++) {
            trips.push("Trip " + tripCnt + ": take bag of corn; come back");
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