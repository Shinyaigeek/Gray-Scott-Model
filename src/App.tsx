import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Board } from "./Board";
// import Canvas from "./Canvas";

function App() {
  useEffect(() => {
    const canvas = new Board(120,'canvas')
    canvas.start()
  }, []);
  return (
    <div>
      aaaaaa
      <canvas id="canvas" width={600} height={600} style={{
        border: "1px solid black"
      }}/>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
