import React, { ButtonHTMLAttributes } from "react";

export interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

function Button(props: Props) {
  return (
    <div>
      <button {...props} >{props.label}</button>
    </div>
  );
}

export default Button;