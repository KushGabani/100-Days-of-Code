import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders hello world", () => {
  const { getByText, getByRole } = render(<App />);
  const linkElement = getByText(/Hello react/i);
  expect(linkElement).toBeInTheDocument();

  const label = getByRole("counter");
  expect(label).toBeInTheDocument();
});
