import React from "react";

export type headerProps = { name?: string };

export function Header({ name = "React" }: headerProps) {
  return <h1>Hello {name}</h1>;
}
