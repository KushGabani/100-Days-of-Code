import React from "react";
import { Header } from "./Header";
import Counter from "./Counter";

const App = () => (
  <div>
    <Header />
    <Counter label={"Current"} />
  </div>
);

export default App;
