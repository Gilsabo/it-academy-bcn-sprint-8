import React from "react";
import {screen, render} from "@testing-library/react"
import Login from "./Login"


describe("Login", () => {
  it("should render a button with text 'Log in'", () => {
    render(<Login userData={null} setUserData={() => {}} />);
    const loginButton = screen.getByText("Log in");
    expect(loginButton).toBeInTheDocument();
  });
});