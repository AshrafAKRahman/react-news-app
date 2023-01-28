import React, { useState, useEffect } from "react";
import Menu from "./components/Menu";
import NewsGrid from "./components/NewsGrid";
import "./index.css";

function App() {
  const [items, setITems] = useState([]);
  const [active, setActive] = useState(1);
  const [category, setCategory] = useState("general");

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/top-headlines?country=gb&category=${category}&apiKey=0bbf0fae28ef47a8b3a4ee575c866001`
    )
      .then((res) => res.json())
      .then((data) => setITems(data.articles));
  }, [category]);

  return (
    <div className="App">
      <h1>The Latest News</h1>
      <Menu active={active} setActive={setActive} setCategory={setCategory} />
      <NewsGrid items={items} />
    </div>
  );
}

export default App;
