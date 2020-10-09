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

test("calculate cost for one trip", () =>{
    act(() => { render(<CalcCost numberOfTrips={1} />, container) })

    expect(container.textContent).toBe("1 return trip costs: £0.50");
});

test("calculate cost for two trips", () =>{
    act(() => { render(<CalcCost numberOfTrips={2} />, container) })

    expect(container.textContent).toBe("2 return trips costs: £1.00");
});

test("calculate cost for three trips", () =>{
    act(() => { render(<CalcCost numberOfTrips={3} />, container) })

    expect(container.textContent).toBe("3 return trips costs: £1.50");
});