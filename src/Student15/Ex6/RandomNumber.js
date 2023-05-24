import React, { useState } from "react";
export const RandomNumber = () => {
  let [number, setNumber] = useState(0);

  const generateNumber = () => {
    setNumber(Math.floor(Math.random() * 11));
  };

  return (
    <div>
      Random Number: {number}
      <br />
      <button onClick={() => generateNumber()}>Generate</button>
    </div>
  );
};
