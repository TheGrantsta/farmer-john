import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import CalcInputs from "./calcInputs"

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

test("calc inputs should include header", () => {
    act(() => { render(<CalcInputs />, container) })

    expect(container.textContent).toBe("Select the number of bags of corn and geese...")
})