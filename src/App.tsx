import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Board } from "./Board";
// import Canvas from "./Canvas";
import { Button } from "./Button";
import { start } from "repl";
import { Input } from "./Input";

function App() {
  let canvas: Board;
  const [f, setF] = useState(0.022);
  const [k, setK] = useState(0.01);
  useEffect(() => {
    canvas = new Board(100, "canvas");
    canvas.reset();
  }, []);

  function start() {
    if (!(k > 0 && k < 0.1 && f > 0 && f < 0.1)) {
      alert("f,kは正しい値を入力してください");
    } else {
      canvas.start();
      Array.from(document.querySelectorAll('input')).forEach(que => {
        que.disabled = true
      })
    }
  }

  function pause() {
    canvas.pause();
    Array.from(document.querySelectorAll('input')).forEach(que => {
      que.disabled = false
    })
  }

  function reset() {
    canvas.reset();
  }

  function setValue(target: string, value: number) {
    switch (target) {
      case "f": {
        setF(value);
        canvas.f = value;
        break;
      }
      case "k": {
        setK(value);
        canvas.k = value;
        break;
      }
    }
  }

  return (
    <div
      style={{
        width: "300px",
        margin: "0 auto"
      }}
    >
      <h1 style={{
        textAlign: "center"
      }}>Gray Scott Model</h1>
      <div
        className="canvas"
        style={{
          width: "300px"
        }}
      >
        <canvas
          id="canvas"
          width={300}
          height={300}
          style={{
            border: "1px solid #d9d9d9",
            borderRadius: "6px"
          }}
        />
      </div>
      <div id="state" style={{
        fontSize: "22px",
        margin:"6px 8px"
      }}>Pausing</div>
      <div className="forms">
        <div
          className="buttons"
          style={{
            width: "300px"
          }}
        >
          <Button label="start" onClick={() => start()} />
          <Button label="pause" onClick={() => pause()} />
          <Button label="reset" onClick={() => reset()} />
        </div>
        <div
          className="input"
          style={{
            width: "300px"
          }}
        >
          <form id="forms">
            <Input
              value={f}
              placeholder="input number 0-0.1"
              label="f"
              onChange={setValue}
            />
            <Input
              value={k}
              placeholder="input number 0-0.1"
              label="k"
              onChange={setValue}
            />
          </form>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
