import React, { useReducer } from "react";

const initialValue = 0;

const reducer = (state, action) => {
  switch (action.type) {
    case "inc":
      return state + 1;
    case "dec":
      return state - 1;
  }
};

function UseReducer() {
  const [count, dispatch] = useReducer(reducer, initialValue);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: "inc" })}>ADD</button>
      <button onClick={() => dispatch({ type: "dec" })}>SUB</button>
    </div>
  );
}

export default UseReducer;
