import React from "react";
import ReactDOM from "react-dom";
import Canvas from "./Canvas";

function App() {
  return (
    <div>
      <Canvas />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
