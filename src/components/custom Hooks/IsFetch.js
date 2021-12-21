import axios from "axios";
import React, { useEffect, useState } from "react";

function IsFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const a = async () => {
      const res = await axios.get(url);
      console.log(res.data);
      setData(res.data);
    };
    a();
  }, [url]);

  return data;
}

export default IsFetch;
