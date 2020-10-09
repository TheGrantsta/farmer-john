
class TripSequence {

    IsValid(numberOfBags, numberOfGeese) {
        if ((numberOfBags > 0 && numberOfGeese === 0) || (numberOfBags === 0 && numberOfGeese > 0)) {
            return true;
        }
console.log(numberOfBags);
        return false;
    }
}

export default TripSequence