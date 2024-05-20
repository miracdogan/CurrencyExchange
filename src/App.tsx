import React, { useState } from "react";
import SingleCurrencyButton from "./components/Buttons/SingleCurrencyButton/SingleCurrencyButton";
import MultipleCurrenciesButton from "./components/Buttons/MultipleCurrenciesButton/MultipleCurrenciesButton";
import SingleCurrencyRect from "./components/SingleCurrencyRect/SingleCurrencyRect";
import MultipleCurrenciesRect from "./components/MultipleCurrenciesRect/MultipleCurrenciesRect";

import "./App.css";
import "./index.css";

const App = () => {
  const [showSingle, setShowSingle] = useState(true);
  return (
    <div className="flex flex-col items-center justify-center space-y-4 mt-44">
      <div className="flex space-x-5">
        <button onClick={() => setShowSingle(true)}>
          <SingleCurrencyButton />
        </button>
        <button onClick={() => setShowSingle(false)}>
          <MultipleCurrenciesButton />
        </button>
      </div>
      {showSingle ? <SingleCurrencyRect /> : <MultipleCurrenciesRect />}
    </div>
  );
};

export default App;
