import React from "react";
import "./panel.css";
export default function Panel(params) {
  return (
    <div className="panel">
      <h1 className="panel-text">{params.title}</h1>
    </div>
  );
}
