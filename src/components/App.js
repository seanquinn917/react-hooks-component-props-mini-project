import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About";

console.log(blogData);

function App() {
  const image =  "https://via.placeholder.com/215"
  return (
    <div className="App">
      {/* <Header /> */}
      <About />
      {/* <ArticleList /> */}
    </div>
  );
}

export default App;
