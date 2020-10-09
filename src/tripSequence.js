
class TripSequence {
    IsValid(numberOfBags, numberOfGeese) {
        let result = true;
        let mergedItems = [];
        let leftBank = [];
        let rightBank = [];

        let evenCounter = 0;
        for (var c = 0; c < numberOfBags; c++) {
            mergedItems[evenCounter] = "Bags"
            evenCounter += 2;
        }

        let oddCounter = 1;
        for (var g = 0; g < numberOfGeese; g++) {
            mergedItems[oddCounter] = "Goose";
            oddCounter += 2;
        }

        let cnt = 0;
        for (var d = 0; d < mergedItems.length; d++) {
            if (mergedItems[d] !== undefined) {
                leftBank[cnt] = mergedItems[d];
                cnt++;
            }
        }

        for (var i = 0; i < leftBank.length; i++) {
            rightBank.push = leftBank[0];

            leftBank.shift();

            var farmerIsOnLeftBank = ((i + 1) % 2 === 0);

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