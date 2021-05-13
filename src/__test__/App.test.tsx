import React from "react";
import { render, screen } from "@testing-library/react";
import App from "App";

test("renders learn react link", () => {
  render(<App />);
  const emailField = screen.getByLabelText(/Email/i);

  expect(emailField).toBeInTheDocument();
});
