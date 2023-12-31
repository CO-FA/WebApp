import React from "react";

export default function Footer({ children }) {
	return (
		<footer>
			<div className="row text-center">
				<div className="col-12 mt-2">{children}</div>
			</div>
		</footer>
	);
}
