import React from "react";

export default function Input(props) {
  return (
    <>
      <label htmlFor="input">{props.label}</label>
      <input id={props.id} type="text" />
    </>
  );
}
