import React from "react"
import { render, unmountComponentAtNode } from "react-dom"
import { act } from "react-dom/test-utils"
import Home from "./home"

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


test("renders learn react link", () => {
  const fakeHandleSubmit = () => { };

  act(() => { render(<Home onSubmitHandler={fakeHandleSubmit} />, container) })

  expect(container.querySelector("[data-testid='Home-Heading']").textContent).toBe("Welcome Farmer John!");
});