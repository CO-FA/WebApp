import React from "react";
import Button from "./Button";

export default function HeaderNavigation({ centerElement }) {
  return (
    <>
      <header>
        <div class="row bg-gradient align-items-center border-radius-top mt-0">
          <div class="col-2 text-center">
            <Button
              className="btn btn-link px-0"
              onClick={() => {
                window.history.back();
              }}
            >
              <svg
                width="15"
                height="15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.75 6.25H4.257l4.127-4.11A1.253 1.253 0 0 0 7.497 0c-.333 0-.653.132-.888.367L.356 6.612a1.249 1.249 0 0 0-.262.412 1.248 1.248 0 0 0 0 .95c.06.153.149.293.262.412L6.61 14.63a1.251 1.251 0 0 0 1.776 0 1.25 1.25 0 0 0 0-1.774l-4.127-4.11h9.492A1.251 1.251 0 0 0 15 7.5a1.248 1.248 0 0 0-1.25-1.249z"
                  fill="#FBFBFC"
                />
              </svg>
            </Button>
          </div>
          {centerElement}
          <div class="col-2">
            <a
              class="btn btn-link px-0 position-relative d-block notif"
              htref="#"
            >
              <svg
                width="19"
                height="21"
                viewBox="0 0 19 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.272 1.2138C14.0235 2.01726 16.15 4.69374 16.15 8.54999C16.15 11.0434 16.6551 12.4473 17.5896 13.4681C17.7481 13.6413 18.1795 14.0392 18.4652 14.3027L18.4653 14.3028C18.597 14.4243 18.6976 14.5171 18.7264 14.5463L19 14.8238V18.0634H13.1804C12.9427 18.9989 12.3569 19.8183 11.4832 20.3515C10.2654 21.0946 8.73424 21.0946 7.51639 20.3515C6.52639 19.7473 5.97895 19.0723 5.78338 18.0634H0V14.8238L0.273566 14.5463C0.305319 14.5144 0.410316 14.4178 0.545859 14.2931L0.54593 14.293L0.545963 14.293C0.832521 14.0294 1.25553 13.6402 1.41166 13.4704C2.34553 12.4543 2.85 11.0522 2.85 8.54999C2.85 4.68276 4.97355 2.01217 7.72847 1.21214C7.82812 0.955 7.98536 0.715958 8.19892 0.515309C8.93019 -0.17177 10.0697 -0.17177 10.8009 0.515309C11.015 0.716387 11.1724 0.956025 11.272 1.2138ZM7.76949 18.0634H11.1497C10.9968 18.329 10.776 18.5572 10.4935 18.7296C9.88335 19.1019 9.11626 19.1019 8.50612 18.7296C8.13248 18.5016 7.90371 18.3131 7.76949 18.0634Z"
                  fill="#FBFBFC"
                />
              </svg>
              <span class="badge badge-danger"></span>
            </a>
          </div>
        </div>
      </header>
    </>
  );
}
