import React from "react";
export default function SoporteOpciones({ text, icon }) {
  return (
    <div class="card text-center my-3 py-3">
      <div class="col-12">{icon}</div>
      <div class="col-12">
        <a href="#">{text}</a>
      </div>
    </div>
  );
}
