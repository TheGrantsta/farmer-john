import TripSteps from "./tripSteps"

it("test combination two bags of corn and two goose is invalid", ()=>{
    const numberOfBags = 2;
    const numberOfGeese = 2;

    let steps = new TripSteps(numberOfBags, numberOfGeese);

    expect(steps.IsValid).toBe(false);
    expect(steps.Sequence).toBe("Your corn will be eaten!");
    expect(steps.Repeat).toBe(0);
})

it("test combination two bags of corn and no geese is valid", ()=>{
    const numberOfBags = 2;
    const numberOfGeese = 0;

    let steps = new TripSteps(numberOfBags, numberOfGeese);

    expect(steps.IsValid).toBe(true);
    expect(steps.Sequence).toBe("take a bag of corn; come back");
    expect(steps.Repeat).toBe(2);
})
