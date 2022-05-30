import React from "react";
import { STEPS } from "./constantsSteps"



export default function RegistroSetps({ current = 1 }) {
	return (
		<div className="row">
			<div className="col-12">
				<nav aria-label="breadcrumb">
					<ol className="breadcrumb justify-content-between">
						<li className={"breadcrumb-item " + (current === STEPS.STEP_1_DNI && "active")}>DNI</li>
						<li className={"breadcrumb-item " + (current === STEPS.STEP_2_CELULAR && "active")}>
							<p>Validar Celular</p>
						</li>
						<li className={"breadcrumb-item " + (current === STEPS.STEP_3_EMAIL && "active")}>
							<p>Validar Email</p>
						</li>
						<li className={"breadcrumb-item " + (current === STEPS.STEP_4_CLAVE && "active")} aria-current="page">
							<p>Contraseña</p>
						</li>
					</ol>
				</nav>
			</div>
		</div>
	);
}
