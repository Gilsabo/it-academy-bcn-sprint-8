import React from "react";

import {screen, render} from "@testing-library/react"
import Films from "./Films"



describe('Films', () => {
  it('should render the Films component with the title', () => {
    render(<Films starship={{ films: [] }} />);
    const titleElement = screen.getByText(/films/i);
    expect(titleElement).toBeInTheDocument();
  });
});
