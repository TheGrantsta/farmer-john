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

    if (numberOfBags > 0 && numberOfGeese === 0 || numberOfBags === 0 && numberOfGeese > 0) {
        var item = (numberOfBags > 0) ? "bag of corn" : "goose";

        steps.IsValid = true;
        steps.Sequence = "take a " + item + "; come back";
        steps.Repeat = Math.max(numberOfBags, numberOfGeese);
    }

    return steps;
}

export default TripSteps