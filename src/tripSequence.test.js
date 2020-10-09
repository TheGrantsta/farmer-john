import TripSequence from "./tripSequence"

it("test combination one bag of corn and zero geese is valid", () => {
    const numberOfBags = 1;
    const numberOfGeese = 0;

    let isValid = new TripSequence().IsValid(numberOfBags, numberOfGeese);

    expect(isValid).toBe(true);
})

it("test combination one bag of corn and zero geese is valid", () => {
    const numberOfBags = 1;
    const numberOfGeese = 0;

    let isValid = new TripSequence().IsValid(numberOfBags, numberOfGeese);

    expect(isValid).toBe(true);
})

it("test combination nine bag of corn and zero geese is valid", () => {
    const numberOfBags = 9;
    const numberOfGeese = 0;

    let isValid = new TripSequence().IsValid(numberOfBags, numberOfGeese);

    expect(isValid).toBe(true);
})

it("test combination zero bags of corn and one goose is valid", () => {
    const numberOfBags = 0;
    const numberOfGeese = 1;

    let isValid = new TripSequence().IsValid(numberOfBags, numberOfGeese);

    expect(isValid).toBe(true);
})

it("test combination zero bags of corn and nine geese is valid", () => {
    const numberOfBags = 0;
    const numberOfGeese = 9;

    let isValid = new TripSequence().IsValid(numberOfBags, numberOfGeese);

    expect(isValid).toBe(true);
})

it("test combination one bag of corn and one goose is valid", ()=>{
    const numberOfBags = 1;
    const numberOfGeese = 1;

    let isValid = new TripSequence().IsValid(numberOfBags, numberOfGeese);

    expect(isValid).toBe(true);
})

it("test combination two bags of corn and two goose is invalid", ()=>{
    const numberOfBags = 2;
    const numberOfGeese = 2;

    let isValid = new TripSequence().IsValid(numberOfBags, numberOfGeese);

    expect(isValid).toBe(false);
})

it("test combination three bags of corn and one goose is invalid", () => {
    const numberOfBags = 3;
    const numberOfGeese = 1;

    let isValid = new TripSequence().IsValid(numberOfBags, numberOfGeese);

    expect(isValid).toBe(false);
})