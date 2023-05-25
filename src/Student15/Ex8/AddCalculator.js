import React, { useState } from "react";

export const AddCalculator = () => {
  let [countTtoal, setCounterTotal] = useState(0);

  const one = () => {
    setCounterTotal(countTtoal + 1);
  };
  const two = () => {
    setCounterTotal(countTtoal + 2);
  };
  const three = () => {
    setCounterTotal(countTtoal + 3);
  };
  return (
    <div>
      <button onClick={() => one()}>Add 1</button>
      <button onClick={() => two()}>Add 2</button>
      <button onClick={() => three()}>Add 3</button>
      <br />
      Total: {countTtoal}
    </div>
  );
};
