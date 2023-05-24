import React, { useState } from "react";

export const NumberBuilder = () => {
    
  let [numberString, setNumberString] = useState("");
  let [counter, setCounter] = useState(0);

  let stringOfNumber = () => {
    setCounter(counter++);
    setNumberString((numberString += counter + " "));
  };

  let reset = () => {
    setNumberString("");
    setCounter(0);
  };

  return (
    <div>
      <button onClick={() => stringOfNumber()}>Add Number</button>
      <button onClick={() => reset()}>Reset</button>
      <br />
      Numbers: {numberString}
    </div>
  );
};
