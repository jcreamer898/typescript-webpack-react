import * as React from "react";

export interface IMessageProps {
  text: string;
  message: string;
}

export default ({
  text,
  message,
}: IMessageProps) => (
  <div>
    <h1>{text}</h1>
    <div>{message}</div>
  </div>
);
