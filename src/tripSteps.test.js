import TripSteps from "./tripSteps"

it("test combination two bags of corn and two goose is valid", ()=>{
    const numberOfBags = 2;
    const numberOfGeese = 2;

    let steps = new TripSteps(numberOfBags, numberOfGeese);

    expect(steps.IsValid).toBe(false);
    expect(steps.Sequence).toBe("Your corn will be eaten!");
    expect(steps.Repeat).toBe(0);
})
