
class TripSequence {
    IsValid(numberOfBags, numberOfGeese) {
        let result = true;
        let leftBank = [];
        let rightBank = [];

        leftBank[0] = "Farmer";

        let oddCounter = 1;
        for (var c = 1; c <= numberOfBags; c++) {
            leftBank[oddCounter] = "Bags"
            oddCounter += 2;
        }
        let evenCounter = 2;
        for (var g = 1; g <= numberOfGeese; g++) {
            leftBank[evenCounter] = "Goose";
            evenCounter += 2;
        }

        for (var i = 1; i <= leftBank.length; i++) {
            rightBank.push = leftBank[1];

            leftBank.shift();

            var farmerIsOnLeftBank = 1 % 2 === 0;

            if (farmerIsOnLeftBank) {
                var bagsOnRightBank = rightBank.filter(function (item) { return item === "Bags" }).length;
                var geeseOnRightBank = rightBank.filter(function (item) { return item === "Goose" }).length;

                console.log("Right bank counts: Bags - " + bagsOnRightBank + " | Geese - " + geeseOnRightBank);

                if (bagsOnRightBank > 0 && geeseOnRightBank > 0) {
                    result = false;
                    break;
                }
            } else {
                var bagsOnLeftBank = leftBank.filter(function (item) { return item === "Bags" }).length;
                var geeseOnLeftBank = leftBank.filter(function (item) { return item === "Goose" }).length;

                console.log("Left bank counts: Bags - " + bagsOnLeftBank + " | Geese - " + geeseOnLeftBank);

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