import React from "react";

import "./swc";
import { Repl } from "./Repl/Repl";
import { app, title } from "./App.css";

function App() {
  return (
    <div className={app}>
      <h1 className={title}>SWC playground</h1>

      <Repl />
    </div>
  );
}

export default App;
