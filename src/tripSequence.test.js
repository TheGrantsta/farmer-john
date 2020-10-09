import TripSequence from "./tripSequence"

it("test something is returned", ()=>{
    const tripSequence = new TripSequence();

    expect(tripSequence.IsValid()).toBe(true);
})