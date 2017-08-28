import * as React from "react";

export interface IMessageProps {
  title: string;
  message: string;
}

export default ({
  title,
  message,
}: IMessageProps) => (
  <div>
    <h1>{title}</h1>
    <div>{message}</div>
  </div>
);
