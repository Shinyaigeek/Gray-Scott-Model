import React from "react";

import _JSXStyle from "styled-jsx"

interface Props {
  label: string;
  placeholder: string;
  value: number;
  onChange: (target: string, value: number) => void;
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
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        id={props.label}
        onChange={e => props.onChange(props.label, Number(e.target.value))}
        disabled={false}
      />
      <style>{`
        #${props.label} {
            width: 84px;
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
