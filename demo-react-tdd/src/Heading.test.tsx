import React from "react";
import { render } from "@testing-library/react";
import { Header } from "./Header";

test("render heading", () => {
  const { getByText } = render(<Header />);
  const linkElement = getByText(/hello React/i);
  expect(linkElement).toBeInTheDocument();
});

test("render heading with argument", () => {
  const { getByText } = render(<Header name={`React`} />);
  const linkElement = getByText(/hello React/i);
  expect(linkElement).toBeInTheDocument();
});
