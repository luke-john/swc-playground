import React from "react";

import "./swc";
import { Repl } from "./Repl/Repl";
import { app, header, title } from "./App.css";
import { Footer } from "./Footer";

function App() {
  return (
    <div className={app}>
      <header className={header}>
        <h1 className={title}>SWC playground</h1>
      </header>

      <Repl />

      <Footer />
    </div>
  );
}

export default App;
