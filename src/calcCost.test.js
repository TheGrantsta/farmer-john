import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import CalcCost from "./calcCost"

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

test("display nothing when number of trips is 0", () => {
    act(() => { render(<CalcCost isValid={true} numberOfTrips={0} />, container) })

    expect(container.textContent).toBe("");
});

test("display nothing when steps are invalid", () => {
    act(() => { render(<CalcCost isValid={false} numberOfTrips={1} />, container) })

    expect(container.textContent).toBe("");
});

test("calculate cost for one trip", () => {
    act(() => { render(<CalcCost isValid={true} numberOfTrips={1} />, container) })

    expect(container.textContent).toBe("1 return trip costs: £0.50");
});

test("calculate cost for two trips", () => {
    act(() => { render(<CalcCost isValid={true} numberOfTrips={2} />, container) })

    expect(container.textContent).toBe("2 return trips cost: £1.00");
});

test("calculate cost for three trips", () => {
    act(() => { render(<CalcCost isValid={true} numberOfTrips={3} />, container) })

    expect(container.textContent).toBe("3 return trips cost: £1.50");
});