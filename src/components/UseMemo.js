import React, { useMemo, useState } from "react";

function UseMemo() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  //   const result = factorial(count);
  const result = useMemo(() => factorial(count), [count]);

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
        <p>my name is {name}</p>
      </div>
    </div>
  );
}

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

export default UseMemo;
