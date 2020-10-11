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

it("test combination no bags of corn and five geese is valid", ()=>{
    const numberOfBags = 0;
    const numberOfGeese = 5;

    let steps = new TripSteps(numberOfBags, numberOfGeese);

    expect(steps.IsValid).toBe(true);
    expect(steps.Sequence).toBe("take a goose; come back");
    expect(steps.Repeat).toBe(5);
})

it("test combination two bags of corn and one goose is valid", ()=>{
    const numberOfBags = 2;
    const numberOfGeese = 1;

    let steps = new TripSteps(numberOfBags, numberOfGeese);

    expect(steps.IsValid).toBe(true);
    expect(steps.Sequence).toBe("take the goose; come back|take a bag of corn; bring back the goose|take a bag of corn; come back|take the goose; come back");
    expect(steps.Repeat).toBe(0);
})

it("test combination one bag of corn and two geese is valid", ()=>{
    const numberOfBags = 1;
    const numberOfGeese = 2;

    let steps = new TripSteps(numberOfBags, numberOfGeese);

    expect(steps.IsValid).toBe(true);
    expect(steps.Sequence).toBe("take the bag of corn; come back|take a goose; bring back the bag of corn|take a goose; come back|take the bag of corn; come back");
    expect(steps.Repeat).toBe(0);
})

it("test combination one bag of corn and one goose is valid", ()=>{
    const numberOfBags = 1;
    const numberOfGeese = 1;

    let steps = new TripSteps(numberOfBags, numberOfGeese);

    expect(steps.IsValid).toBe(true);
    expect(steps.Sequence).toBe("take a bag of corn; come back|take a goose; come back");
    expect(steps.Repeat).toBe(0);
})


//todo: one of each; two geese and one bag of corn


