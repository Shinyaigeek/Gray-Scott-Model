import React from "react";

interface BProps {
  concentration: number;
}

function Block(props: BProps) {
  return (
    <div
      style={{
        width: "3px",
        height: "3px",
        // border: "0.1px solid black",
        background: `rgb(${255 * props.concentration},
        ${255 * props.concentration},
        ${255 * props.concentration})`
      }}
    ></div>
  );
}

export { Block };
