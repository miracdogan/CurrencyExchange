import React from "react";
import SingleCurrencyButton from "./components/Buttons/SingleCurrencyButton/SingleCurrencyButton";
import MultipleCurrenciesButton from "./components/Buttons/MultipleCurrenciesButton/MultipleCurrenciesButton";
import "./App.css";
import "./output.css";

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <SingleCurrencyButton />
      <MultipleCurrenciesButton />
    </div>
  );
};

export default App;
