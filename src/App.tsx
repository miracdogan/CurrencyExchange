import React from "react";
import SingleCurrencyButton from "./components/Buttons/SingleCurrencyButton/SingleCurrencyButton";
import MultipleCurrenciesButton from "./components/Buttons/MultipleCurrenciesButton/MultipleCurrenciesButton";
import "./App.css";
import "./index.css";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-96">
      <div className="flex space-x-4 h-full max-h-0">
        <div>
          <SingleCurrencyButton />
        </div>
        <div>
          <MultipleCurrenciesButton />
        </div>
      </div>
    </div>
  );
};

export default App;
