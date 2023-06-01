import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Layouts from "./Layouts";


test("renders home and starships links", () => {
  render(
    <MemoryRouter>
      <Layouts/>
    </MemoryRouter>
  );

  const homeLink = screen.getByText(/home/i);
  const starshipsLink = screen.getByText(/starships/i);

  expect(homeLink).toBeInTheDocument();
  expect(starshipsLink).toBeInTheDocument();
});