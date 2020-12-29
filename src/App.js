import React from "react";

import Random from "./components/Random_v1";
import Tag from "./components/Tag_v1";

import "./App.css";

const App = () => (
  <div>
    <h1>Random GIF Application</h1>
    <div className="main-container">
      <Random />
      <Tag />
    </div>
  </div>
);

export default App;
