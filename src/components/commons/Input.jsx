import React, { useState } from "react";
import ShowPasswordButton from "./ShowPasswordButton";

export default function Input({
	type,
	className,
	name,
	id,
	pattern,
	showPasswordButton,
	error,
	label,
	maxLength,
}) {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<>
			<label for={id}>{label}</label>
			<div class="input-group" id={"inputGroup" + id}>
				<input
					id={id}
					type={!showPassword ? type : "text"}
					class={className}
					name={name}
					pattern={pattern || ""}
					maxLength={maxLength || ""}
				/>
				{showPasswordButton && (
					<ShowPasswordButton
						setShowPassword={() => setShowPassword(!showPassword)}
						showPassword={showPassword}
					/>
				)}
			</div>
			{error && (
				<span id="clientePass-errorMsg" class="form-text text-danger small">
					{`* ${error}`}
				</span>
			)}
		</>
	);
}
