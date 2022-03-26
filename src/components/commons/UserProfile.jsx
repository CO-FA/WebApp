import React from "react";
import { Link } from "react-router-dom";
import userImage from "../../assets/images/user-img.png";

export default function UserProfile() {
  return (
    <div className="row mt-3">
      <div className="col-6 offset-3 text-center">
        <Link href="#" className="photo mt-3 position-relative">
          <img
            src={userImage}
            alt="Nombre de usuario"
            width="100"
            height="100"
          />
          <span>
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
        </Link>
      </div>
      <div className="col-12">
        <h4 className="text-center mt-3">Ronaldo de Assis Moreira</h4>
        <p className="extra-small text-center mt-2">MASC | 24.235.647 </p>
      </div>
    </div>
  );
}
