import React from "react"

function TripSteps(numberOfBags, numberOfGeese) {
    var steps = {
        IsValid: false,
        Sequence: "",
        Repeat: 0
    };

    if (numberOfBags >= 2 && numberOfGeese > 1) {
        steps.Sequence = "Your corn will be eaten!";
    }

    if (numberOfBags > 0 && numberOfGeese === 0) {
        steps.IsValid = true;
        steps.Sequence = "take a bag of corn; come back";
        steps.Repeat = numberOfBags;
    }

    return steps;
}

export default TripSteps