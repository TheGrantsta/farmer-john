function TripSteps(numberOfBags, numberOfGeese) {
    var steps = {
        IsValid: true,
        Sequence: "",
        Repeat: 0
    };
    
    if (numberOfBags === 1 && numberOfGeese === 1) {
        steps.Sequence = "take a bag of corn; come back|take a goose; come back";
    }

    if (numberOfBags === 2 && numberOfGeese === 1) {
        steps.Sequence = "take the goose; come back|take a bag of corn; bring back the goose|take a bag of corn; come back|take the goose; come back";
    }

    if (numberOfBags === 1 && numberOfGeese === 2) {
        steps.Sequence = "take the bag of corn; come back|take a goose; bring back the bag of corn|take a goose; come back|take the bag of corn; come back";
    }

    if ((numberOfBags > 0 && numberOfGeese === 0) || (numberOfBags === 0 && numberOfGeese > 0)) {
        var item = (numberOfBags > 0) ? "bag of corn" : "goose";

        steps.Sequence = "take a " + item + "; come back";
        steps.Repeat = Math.max(numberOfBags, numberOfGeese);
    }

    if (numberOfBags >= 2 && numberOfGeese > 1) {
        steps.IsValid = false;
        steps.Sequence = "Your corn will be eaten!";
    }

    return steps;
}

export default TripSteps