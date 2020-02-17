import React from "react";
import { Block } from "./Block";

interface CProps {
  concentrations: number[];
}

function Column(props: CProps) {
  return (
    <div
      style={{
        width: `${props.concentrations.length * 3}px`,
        height: "3px",
        display: "flex"
      }}
    >
      {props.concentrations.map(concentration => {
        return <Block concentration={concentration} />;
      })}
    </div>
  );
}

export { Column };
