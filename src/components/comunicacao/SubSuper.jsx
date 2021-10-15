import React from "react";

export default function Sub(props) {
  return (
    <div>
      <button
        onClick={() => {
          props.handleClick(Math.random() * (100 - 1) + 1, "Gerado");
        }}
      >
        Alterar
      </button>
    </div>
  );
}
