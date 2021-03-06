import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Board } from "./Board";
// import Canvas from "./Canvas";
import { Button } from "./Button";
import { start } from "repl";
import { Input } from "./Input";
import { Recommended } from "./Recommended";

function App() {
  let canvas: Board;
  useEffect(() => {
    canvas = new Board(100, "canvas");
    canvas.reset();
  }, []);

  function start() {
    const f = Number((document.getElementById("f") as HTMLInputElement).value);
    const k = Number((document.getElementById("k") as HTMLInputElement).value);
    if (!(k > 0 && k < 0.1 && f > 0 && f < 0.1)) {
      alert("f,kは正しい値を入力してください");
    } else {
      canvas.f = f;
      canvas.k = k;
      canvas.start();
      Array.from(document.querySelectorAll("input")).forEach(que => {
        que.disabled = true;
      });
      document.getElementById("state")!.innerText = "Playing";
    }
  }

  function pause() {
    canvas.pause();
    Array.from(document.querySelectorAll("input")).forEach(que => {
      que.disabled = false;
    });
    document.getElementById("state")!.innerText = "Pausing";
  }

  function reset() {
    canvas.reset();
  }

  function onRecommended(f: number, k: number) {
    (document.getElementById("f") as HTMLInputElement).value = f.toString();
    (document.getElementById("k") as HTMLInputElement).value = k.toString();
  }

  return (
    <div
      style={{
        width: "300px",
        margin: "0 auto"
      }}
    >
      <h1
        style={{
          textAlign: "center"
        }}
      >
        Gray Scott Model
      </h1>
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
      <div
        id="state"
        style={{
          fontSize: "22px",
          margin: "6px 8px"
        }}
      >
        Pausing
      </div>
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
            <Input value={0.04} placeholder="input number 0-0.1" label="f" />
            <Input value={0.06} placeholder="input number 0-0.1" label="k" />
          </form>
        </div>
        <div className="recommendeds">
          <h2>Recommended Values</h2>
          <ul>
            <Recommended
              label="stripe"
              f={0.022}
              k={0.051}
              onRecommended={onRecommended}
            />
            <Recommended
              label="amorphous"
              f={0.04}
              k={0.06}
              onRecommended={onRecommended}
            />
            <Recommended
              label="spots"
              f={0.035}
              k={0.065}
              onRecommended={onRecommended}
            />
            <Recommended
              label="wandering bubbles"
              f={0.012}
              k={0.05}
              onRecommended={onRecommended}
            />
            <Recommended
              label="waves"
              f={0.025}
              k={0.05}
              onRecommended={onRecommended}
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
