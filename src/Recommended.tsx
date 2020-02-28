import React from "react";

interface Props {
  label: string;
  f: number;
  k: number;
  onRecommended: (f: number, k: number) => void;
}

export function Recommended(props: Props) {
  return (
    <li
      className="recommended"
      style={{
        margin: "12px 18px",
        fontSize: "18px"
      }}
      onClick={() => props.onRecommended(props.f, props.k)}
    >
      <span>f:{props.f}</span>
      {"  "}
      <span>k:{props.k}</span>
      {"    "}
      <span
        style={{
          color: "#aaa"
        }}
      >
        #{props.label}
      </span>
    </li>
  );
}
