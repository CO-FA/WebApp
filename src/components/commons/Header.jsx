import React from "react";
import Button from "./Button";

export default function Header({ title }) {
	return (
		<header>
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
						fill="#353535"
					/>
				</svg>
			</Button>
			{title && <h1 className="my-3 text-center">{title}</h1>}
		</header>
	);
}