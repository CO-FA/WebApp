import React from "react";

export default function MenuOption({ text, icon, href }) {
  return (
    <div class="list-group">
      <a
        href={href}
        class="list-group-item list-group-item-action p-2 w-100 border-right-0 border-left-0 d-flex justify-content-between align-items-center rounded-0"
      >
        <span>
          {icon}
          {text}
        </span>
        <svg
          class="float-right"
          width="6"
          height="11"
          viewBox="0 0 6 11"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M0.21967 1.28033C-0.0732232 0.987437 -0.0732233 0.512563 0.21967 0.21967C0.512563 -0.0732234 0.987437 -0.0732234 1.28033 0.21967L5.78033 4.71967C6.07322 5.01256 6.07322 5.48744 5.78033 5.78033L1.28033 10.2803C0.987438 10.5732 0.512564 10.5732 0.219671 10.2803C-0.0732224 9.98744 -0.0732225 9.51256 0.219671 9.21967L4.18934 5.25L0.21967 1.28033Z"
            fill="#2B2F34"
          ></path>
        </svg>
      </a>
    </div>
  );
}
