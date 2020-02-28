import React from 'react'

interface Props {
    onClick: () => void,
    label: string
}

export function Button(props: Props) {
    return (
        <button onClick={() => props.onClick()} style={{
            width: "84px",
            height: "36px",
            border: "1px solid #aaa",
            borderRadius: "8px",
            background: "#1890ff",
            color: "#fff",
            boxShadow: "0 2px 0 rgba(0, 0, 0, 0.045)",
            WebkitBoxShadow: "0 2px 0 rgba(0, 0, 0, 0.045)",
            margin:"12px 6px",
        }}>
            {props.label}
        </button>
    )
}
