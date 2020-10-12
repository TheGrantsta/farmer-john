import React from "react"
import TripSteps from "./tripSteps"
import CalcCost from "./calcCost"

const TripAdvisor = (props) => {
    const maxSteps = 10;
    let trips = [];
    let instructions = [];
    var steps = new TripSteps(props.numberOfBags, props.numberOfGeese);

    if (steps.IsValid) {
        if (steps.Repeat > 0) {
            for (var i = 1; i <= Math.min(steps.Repeat, maxSteps); i++) {
                trips.push("Trip " + i + ": " + steps.Sequence);
            }

            if (steps.Repeat > maxSteps) {
                trips.push("Trip " + steps.Repeat + ": " + steps.Sequence);
            }
        } else {
            if (steps.Sequence.length > 0) {
                steps.Sequence.split("|").map((item, i) => {
                    return trips.push("Trip " + (i + 1) + ": " + item);
                })
            }
        }
    } else {
        instructions.push(steps.Sequence);
    }

    if (steps.IsValid) {
        var isTruncated = steps.Repeat > maxSteps;

        instructions = trips.slice(0, Math.min(10, trips.length));

        if (isTruncated) {
            instructions.push("(repeat steps)");
            instructions.push(trips[trips.length - 1]);
        }
    }

    return (
        <div>
            <div>
                <CalcCost isValid={steps.IsValid} numberOfTrips={trips.length} />
            </div>
            <div data-testid="Trip-Sequence">
                {
                    instructions.map((item, i) => {
                        return <p key={i}>{item}</p>
                    })
                }
            </div>
        </div>
    )
}

export default TripAdvisor