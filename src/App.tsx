import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { Board } from "./Board";
// import Canvas from "./Canvas";

function App() {
  useEffect(() => {
    const canvas = new Board(50,50,'canvas')
    canvas.start()
  }, []);
  return (
    <div>
      aaaaaa
      <canvas id="canvas" width={600} height={600} />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
