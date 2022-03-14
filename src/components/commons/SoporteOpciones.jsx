import React from "react";
export default function SoporteOpciones({ text, icon }) {
  return (
    <div className="card text-center my-3 py-3">
      <div className="col-12">{icon}</div>
      <div className="col-12">
        <a href="/soporte">{text}</a>
      </div>
    </div>
  );
}
