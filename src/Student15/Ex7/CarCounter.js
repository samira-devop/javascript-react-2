import React from "react";
import { useState } from "react";

export const CarCounter = () => {
  let [FordCounter, setFordCounter] = useState(0);
  let [ToyotaCounter, setToyotaCounter] = useState(0);
  let [ChevyCounter, setChevyCounter] = useState(0);
  let [TotalCounter, setTotalcounter] = useState(0);

  const ford = () => {
    setFordCounter(FordCounter++);
    setTotalcounter(TotalCounter++);
  };
  const toyota = () => {
    setToyotaCounter(ToyotaCounter++);
    setTotalcounter(TotalCounter++);
  };
  const chevy = () => {
    setChevyCounter(ChevyCounter++);
    setTotalcounter(TotalCounter++);
  };

  return (
    <div>
      <button onClick={() => ford()}>Ford</button>
      <button onClick={() => toyota()}>Toyota</button>
      <button onClick={() => chevy()}>Chevy</button>
      <br />
      Ford: {FordCounter}
      <br />
      Toyota: {ToyotaCounter}
      <br />
      Chevy: {ChevyCounter}
      <br />
      Total: {TotalCounter}
    </div>
  );
};
