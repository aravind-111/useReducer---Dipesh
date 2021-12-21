import axios from "axios";
import React, { useEffect, useState } from "react";
import IsFetch from "./IsFetch";

function CustomHooks() {
  // const [data, setData] = useState([]);

  // const a = async () => {
  //   const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
  //   setData(res.data);
  // };

  // useEffect(() => {
  //   a();
  // }, []);

  const data = IsFetch("https://jsonplaceholder.typicode.com/todos");

  return (
    <div>
      {data.map((data) => {
        return <div key={data.id}>{data.title}</div>;
      })}
    </div>
  );
}

export default CustomHooks;
