
class TripSequence {
    IsValid(numberOfBags, numberOfGeese) {
        let result = true;
        let leftBank = [];
        let rightBank = [];

        leftBank.push("Farmer");
        for (var c = 1; c <= numberOfBags; c++) {
            leftBank.push("Bag");
        }
        for (var g = 1; g <= numberOfGeese; g++) {
            leftBank.push("Goose");
        }

        for (var i = 1; i <= leftBank.length; i++) {
            rightBank.push = leftBank.pop();

            var farmerIsOnLeftBank = 1 % 2 === 0;

            if (farmerIsOnLeftBank) {
                var bagsOnRightBank = rightBank.filter(function (item) { return item === "Bag" }).length;
                var geeseOnRightBank = rightBank.filter(function (item) { return item === "Goose" }).length;

                if (bagsOnRightBank > 0 && geeseOnRightBank > 0) {
                    result = false;
                    break;
                }
            } else {
                var bagsOnLeftBank = leftBank.filter(function (item) { return item === "Bag" }).length;
                var geeseOnLeftBank = leftBank.filter(function (item) { return item === "Goose" }).length;

                if (bagsOnLeftBank > 0 && geeseOnLeftBank > 0) {
                    result = false;
                    break;
                }
            }
        }

        return result;
    }
}

export default TripSequence