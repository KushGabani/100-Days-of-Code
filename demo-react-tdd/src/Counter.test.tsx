import React from "react";
import { render } from "@testing-library/react";
import Counter from "./Counter";

test("should render a label and counter", () => {
  const { getByRole } = render(<Counter />);
  const label = getByRole("label");

  expect(label).toBeInTheDocument();

  const counter = getByRole("counter");
  expect(counter).toBeInTheDocument();
});

test("should render a counter with a custom label", () => {
  const { getByRole } = render(<Counter label={"Count"} />);
  const label = getByRole("label");

  expect(label).toBeInTheDocument();

  const counter = getByRole("counter");
  expect(counter).toBeInTheDocument();
});
