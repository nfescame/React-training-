import React from "react";

export default function Filho(props) {
  return (
    <div>
      <p>
        {props.children} {props.sobrenome}
      </p>
    </div>
  );
}
