import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import TripAdvisor from "./tripAdvisor"

let container = null

beforeEach(() => {
    // setup a DOM element as a render target
    container = document.createElement("div");
    document.body.appendChild(container);
})

afterEach(() => {
    // cleanup on exiting
    unmountComponentAtNode(container);
    container.remove();
    container = null;
})

test("display nothing when both inputs are both 0", ()=>{
    act(() => { render(<TripAdvisor numberOfBags={0} numberOfGeese={0} />, container) })

    expect(container.querySelector("[data-testid='Trip-Sequence']").textContent).toBe("");
});

test("display trip sequence when only transporting bags of corn", ()=>{
    act(() => { render(<TripAdvisor numberOfBags={2} numberOfGeese={0} />, container) })

    expect(container.querySelector("[data-testid='Trip-Sequence']").textContent).toBe("Trip 1: take a bag of corn; come backTrip 2: take a bag of corn; come back");
});

test("display trip sequence when only transporting geese", ()=>{
    act(() => { render(<TripAdvisor numberOfBags={0} numberOfGeese={2} />, container) })

    expect(container.querySelector("[data-testid='Trip-Sequence']").textContent).toBe("Trip 1: take a goose; come backTrip 2: take a goose; come back");
});

test("display trip sequence when transporting one bag of corn and one goose", ()=>{
    act(() => { render(<TripAdvisor numberOfBags={1} numberOfGeese={1} />, container) })

    expect(container.querySelector("[data-testid='Trip-Sequence']").textContent).toBe("Trip 1: take a goose; come backTrip 2: take a bag of corn; come back");
});