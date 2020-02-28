import React from "react";

import _JSXStyle from "styled-jsx"

interface Props {
  label: string;
  placeholder: string;
  value: number;
}

export function Input(props: Props) {
  return (
    <div
      style={{
        margin: "6px auto 6px 24px"
      }}
    >
      <span
        style={{
          fontSize: "16px",
          margin: "0 12px 0 0"
        }}
      >
        {props.label}:
      </span>{" "}
      <input
        type="number"
        placeholder={props.placeholder}
        id={props.label}
        disabled={false}
        step={0.00001}
        min={0}
        max={0.1}
      />
      <style>{`
        #${props.label} {
            width: 216px;
            height: 32px;
            padding: 4px 11px;
            font-size: 14px;
            border: 1px solid #d9d9d9;
            border-radius: 4px
        }

        #${props.label}:disabled {
            color: #aaa
        }
      `}</style>
    </div>
  );
}
