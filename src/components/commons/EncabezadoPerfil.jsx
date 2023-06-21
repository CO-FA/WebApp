import React from "react";
import userImage from "../../assets/images/user-img.png";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function EncabezadoPerfil() {
  return (
    <div className="row">
      <div className="bg-gradient d-flex justify-content-end flex-grow-1 py-2 w-100">
        <Button
          className="btn btn-link px-3"
          onClick={() => {
            window.history.back();
          }}
        >
          <svg
            className="text-white"
            width="15"
            height="15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.75 6.25H4.257l4.127-4.11A1.253 1.253 0 0 0 7.497 0c-.333 0-.653.132-.888.367L.356 6.612a1.249 1.249 0 0 0-.262.412 1.248 1.248 0 0 0 0 .95c.06.153.149.293.262.412L6.61 14.63a1.251 1.251 0 0 0 1.776 0 1.25 1.25 0 0 0 0-1.774l-4.127-4.11h9.492A1.251 1.251 0 0 0 15 7.5a1.248 1.248 0 0 0-1.25-1.249z"
              fill="#FFF"
            />
          </svg>
        </Button>
        <h5 className="text-white flex-grow-1 text-center align-self-end">
          Mi Perfil
        </h5>
        <div className="p-1 text-center">
          <a
            className="btn btn-link px-0 position-relative d-block notif"
            href="http://www.wa.me/54911xxxxxx"
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 21L1.48317 15.6074C0.567948 14.0289 0.0870384 12.2395 0.0879176 10.4046C0.0905551 4.66812 4.78096 0 10.544 0C13.3406 0.000875 15.9658 1.085 17.9405 3.052C19.9142 5.019 21.0009 7.6335 21 10.4143C20.9974 16.1516 16.307 20.8197 10.544 20.8197C8.7944 20.8189 7.07033 20.3822 5.5432 19.5527L0 21ZM5.79992 17.6689C7.27342 18.5395 8.6801 19.061 10.5404 19.0619C15.3302 19.0619 19.232 15.1821 19.2346 10.4125C19.2364 5.63325 15.3531 1.75875 10.5475 1.757C5.75421 1.757 1.85506 5.63675 1.8533 10.4055C1.85242 12.3524 2.42565 13.8101 3.38834 15.3352L2.51005 18.5273L5.79992 17.6689ZM15.8111 12.8879C15.746 12.7794 15.572 12.7146 15.31 12.5842C15.0489 12.4539 13.7644 11.8247 13.5244 11.7381C13.2852 11.6515 13.1112 11.6077 12.9362 11.8685C12.7621 12.1284 12.261 12.7146 12.1089 12.8879C11.9568 13.0611 11.8038 13.083 11.5427 12.9526C11.2816 12.8223 10.4393 12.5484 9.44147 11.662C8.66516 10.9725 8.14029 10.1211 7.98819 9.86038C7.8361 9.6005 7.97237 9.45963 8.10249 9.33012C8.2203 9.21375 8.3636 9.0265 8.4946 8.87425C8.62735 8.72375 8.67043 8.61525 8.75835 8.44112C8.84539 8.26788 8.80231 8.11563 8.73637 7.98525C8.67043 7.85575 8.1482 6.57562 7.93105 6.055C7.71829 5.54838 7.50289 5.61662 7.34288 5.60875L6.84175 5.6C6.66767 5.6 6.38458 5.66475 6.14544 5.9255C5.9063 6.18625 5.2311 6.8145 5.2311 8.09463C5.2311 9.37475 6.16742 10.6111 6.29754 10.7844C6.42853 10.9576 8.13941 13.5844 10.7602 14.7105C11.3836 14.9783 11.8706 15.1384 12.2496 15.2582C12.8755 15.456 13.4452 15.428 13.8954 15.3615C14.3974 15.2871 15.441 14.7324 15.659 14.1251C15.877 13.517 15.877 12.9964 15.8111 12.8879Z"
                fill="#FBFBFC"
              />
            </svg>
          </a>
        </div>
        <div className="p-1 text-center">
          <Link
            className="btn btn-link px-0 position-relative d-block notif"
            to="/notificaciones"
          >
            <svg
              width="19"
              height="21"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M11.272 1.2138C14.0235 2.01726 16.15 4.69374 16.15 8.54999C16.15 11.0434 16.6551 12.4473 17.5896 13.4681C17.7481 13.6413 18.1795 14.0392 18.4652 14.3027L18.4653 14.3028C18.597 14.4243 18.6976 14.5171 18.7264 14.5463L19 14.8238V18.0634H13.1804C12.9427 18.9989 12.3569 19.8183 11.4832 20.3515C10.2654 21.0946 8.73424 21.0946 7.51639 20.3515C6.52639 19.7473 5.97895 19.0723 5.78338 18.0634H0V14.8238L0.273566 14.5463C0.305319 14.5144 0.410316 14.4178 0.545859 14.2931L0.54593 14.293L0.545963 14.293C0.832521 14.0294 1.25553 13.6402 1.41166 13.4704C2.34553 12.4543 2.85 11.0522 2.85 8.54999C2.85 4.68276 4.97355 2.01217 7.72847 1.21214C7.82812 0.955 7.98536 0.715958 8.19892 0.515309C8.93019 -0.17177 10.0697 -0.17177 10.8009 0.515309C11.015 0.716387 11.1724 0.956025 11.272 1.2138ZM7.76949 18.0634H11.1497C10.9968 18.329 10.776 18.5572 10.4935 18.7296C9.88335 19.1019 9.11626 19.1019 8.50612 18.7296C8.13248 18.5016 7.90371 18.3131 7.76949 18.0634Z"
                fill="#FBFBFC"
              />
            </svg>
            <span className="badge badge-danger"></span>
          </Link>
        </div>
      </div>

      <div className="d-flex justify-content-center w-100">
        <a href="/" className="photo mt-3 position-relative">
          <img
            src={userImage}
            alt="Nombre de usuario"
            width="100"
            height="100"
          />
          <span
            className="position-absolute"
            style={{ bottom: "0", right: "0px" }}
          >
            <svg
              width="21"
              height="21"
              viewBox="0 0 21 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="10.5"
                cy="10.5"
                r="10"
                fill="#FBFBFC"
                stroke="#01796F"
              />
              <path
                d="M15.3043 16H5.73913C4.78261 16 4 15.2174 4 14.2609V9.04348C4 8.08696 4.78261 7.30435 5.73913 7.30435H6.82609C6.86957 7.30435 6.89855 7.27536 6.89855 7.23188C6.89855 6.55072 7.44928 6 8.13043 6H12.913C13.5942 6 14.1449 6.55072 14.1449 7.23188C14.1449 7.27536 14.1739 7.30435 14.2174 7.30435H15.3043C16.2609 7.30435 17.0435 8.08696 17.0435 9.04348V14.2609C17.0435 15.2174 16.2609 16 15.3043 16ZM5.73913 8.46377C5.42029 8.46377 5.15942 8.72464 5.15942 9.04348V14.2609C5.15942 14.5797 5.42029 14.8406 5.73913 14.8406H15.3043C15.6232 14.8406 15.8841 14.5797 15.8841 14.2609V9.04348C15.8841 8.72464 15.6232 8.46377 15.3043 8.46377H14.2174C13.5362 8.46377 12.9855 7.91304 12.9855 7.23188C12.9855 7.18841 12.9565 7.15942 12.913 7.15942H8.13043C8.08696 7.15942 8.05797 7.18841 8.05797 7.23188C8.05797 7.91304 7.50725 8.46377 6.82609 8.46377H5.73913Z"
                fill="#01796F"
              />
              <path
                d="M10.5218 13.9713C9.087 13.9713 7.91309 12.7974 7.91309 11.3626C7.91309 9.92782 9.087 8.75391 10.5218 8.75391C11.9566 8.75391 13.1305 9.92782 13.1305 11.3626C13.1305 12.7974 11.9566 13.9713 10.5218 13.9713ZM10.5218 9.62347C9.56526 9.62347 8.78265 10.4061 8.78265 11.3626C8.78265 12.3191 9.56526 13.1017 10.5218 13.1017C11.4783 13.1017 12.2609 12.3191 12.2609 11.3626C12.2609 10.4061 11.4783 9.62347 10.5218 9.62347Z"
                fill="#01796F"
              />
              <path
                d="M14.5803 9.91321C14.8204 9.91321 15.0151 9.71855 15.0151 9.47842C15.0151 9.2383 14.8204 9.04364 14.5803 9.04364C14.3402 9.04364 14.1455 9.2383 14.1455 9.47842C14.1455 9.71855 14.3402 9.91321 14.5803 9.91321Z"
                fill="#01796F"
              />
            </svg>
          </span>
        </a>
      </div>
      <div className="col-12">
        <h4 className="text-center text-black mt-3">
          Ronaldo de Assis Moreira
        </h4>
        <p className="extra-small text-center text-black mt-2">
          MASC | 24.235.647{" "}
        </p>
      </div>
    </div>
  );
}
