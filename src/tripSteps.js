import React from "react"

function TripSteps(numberOfBags, numberOfGeese) {
    var steps = {
        IsValid: false,
        Sequence: "Your corn will be eaten!",
        Repeat: 0
    };

    if (numberOfBags >= 2 && numberOfGeese > 1) {
        return steps;
    }
}

export default TripSteps