import React, { useCallback, useEffect, useMemo, useState } from "react";

function UseCallback() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  //   const result = factorial(count);
  const result = useMemo(() => factorial(count), [count]);

  const displayName = useCallback(
    (greetings) => {
      return greetings + " " + name;
    },
    [name]
  );

  return (
    <div>
      <h1>
        factorial of {count} is {result}
      </h1>
      <div>
        <button onClick={() => setCount(count + 1)}>ADD</button>
        <button onClick={() => setCount(count + 1)}>REMOVE</button>
      </div>
      <hr></hr>
      <div>
        <p>Enter your name</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <DisplayName displayName={displayName} />
      </div>
    </div>
  );
}

const DisplayName = ({ displayName }) => {
  const [value, setValue] = useState("");
  useEffect(() => {
    setValue(displayName("Hello"));
    console.log("component rendered");
  }, [displayName]);
  return <p>my name is {value}</p>;
};

function factorial(n) {
  let i = 0;
  while (i < 200000000) i++;
  if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

export default UseCallback;
