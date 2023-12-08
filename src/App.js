import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Header from "./components/header";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />

      <div className="content">
        <div>
          <img src="https://i.imgur.com/WDJoaGo.jpg" />
        </div>
        <div>ava + description</div>
        <div>
          My posts
          <div>New posts</div>
          <div>post 1</div>
          <div>post2</div>
        </div>
      </div>
    </div>
  );
};

export default App;
