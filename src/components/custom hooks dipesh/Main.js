import React from "react";
import useFetch from "./useFetch";

function Main() {
  const BASE_URL = "https://inshortsapi.vercel.app/news?category=science";
  const { data: news, loading, error } = useFetch(BASE_URL);
  return (
    <div>
      <h1>Custom Hook with Data Fetching</h1>
      {loading && <h1>loading...</h1>}
      {error && <h3>Error: Something went wrong</h3>}
      {news.length}
      <div>
        <pre>{JSON.stringify(news, undefined, 2)}</pre>
      </div>
    </div>
  );
}

export default Main;
