import { FunctionComponent } from "react";
import './Button.css'

interface ButtonProps {
  text: string,
  onClick: ()=>void
}

export const Button: FunctionComponent<ButtonProps> = ({text, onClick}) => {
  return <>
      <button onClick={onClick}>{text}</button>
    </>
}