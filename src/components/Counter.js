import React, { useState } from "react";
function Counter(params) {
  const [counter, saveCounter] = useState(0);

  const onDecrementClick = () => {
    saveCounter(counter - 1);
  };

  const onIncrementClick = () => {
    saveCounter(counter + 1);
  };
  return (
    <div>
      <div id="rootCounter">{counter}</div>
      <button id="btnDecrease" onClick={onDecrementClick}>-</button>
      <button id="btnIncrease" onClick={onIncrementClick}>+</button>
    </div>
  );
}

export default Counter;