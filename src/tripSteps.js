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

    if(numberOfBags ===2 && numberOfGeese === 1){
        steps.IsValid = true;
        steps.Sequence = "take the goose; come back|take a bag of corn; bring back the goose|take a bag of corn; come back|take the goose; come back";

        return steps;
    }

    if(numberOfBags === 1 && numberOfGeese === 2){
        steps.IsValid = true;
        steps.Sequence = "take the bag of corn; come back|take a goose; bring back the bag of corn|take a goose; come back|take the bag of corn; come back";

        return steps;
    }

    if(numberOfBags === 1 && numberOfGeese === 1){
        steps.IsValid = true;
        steps.Sequence = "take a bag of corn; come back|take a goose; come back";

        return steps;
    }

    return steps;
}

export default TripSteps