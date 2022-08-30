import React from "react";

function Alert({ text, type }) {
  return <div className={`alert alert-${type}`}>{text}</div>;
}

export default Alert;
