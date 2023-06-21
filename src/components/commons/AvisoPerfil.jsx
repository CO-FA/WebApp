import React from "react";

export default function AvisoPerfil({ text }) {
  return (
    <button
      class="btn border py-3 w-100 d-flex justify-content-between align-items-center"
      type="submit"
    >
      <span>
        <svg
          class="mr-2"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="#FFD703" />
          <path
            d="M13.2008 12.2156V6.21563C13.2008 5.55288 12.6635 5.01562 12.0008 5.01562C11.338 5.01562 10.8008 5.55288 10.8008 6.21563V12.2156C10.8008 12.8784 11.338 13.4156 12.0008 13.4156C12.6635 13.4156 13.2008 12.8784 13.2008 12.2156Z"
            fill="#353535"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.9992 15.8148C11.3365 15.8148 10.7992 16.3521 10.7992 17.0148C10.7992 17.6776 11.3365 18.2148 11.9992 18.2148C12.662 18.2148 13.1992 17.6776 13.1992 17.0148C13.1992 16.3521 12.662 15.8148 11.9992 15.8148Z"
            fill="#353535"
          />
        </svg>
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.21967 1.28033C-0.0732232 0.987437 -0.0732233 0.512563 0.21967 0.21967C0.512563 -0.0732234 0.987437 -0.0732234 1.28033 0.21967L5.78033 4.71967C6.07322 5.01256 6.07322 5.48744 5.78033 5.78033L1.28033 10.2803C0.987438 10.5732 0.512564 10.5732 0.219671 10.2803C-0.0732224 9.98744 -0.0732225 9.51256 0.219671 9.21967L4.18934 5.25L0.21967 1.28033Z"
          fill="#2B2F34"
        ></path>
      </svg>
    </button>
  );
}
