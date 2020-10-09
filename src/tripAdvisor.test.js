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

    expect(container.textContent).toBe("");
});