import React, { useState } from "react";
import ShowPasswordButton from "./ShowPasswordButton";

export default function Input({
	type,
	className,
	name,
	showPasswordButton,
	errors,
	label,
	values,
	handleChange,
}) {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<>
			<label for={name}>{label}</label>
			<div class="input-group" id={"inputGroup" + name}>
				<input
					id={name}
					type={!showPassword ? type : "text"}
					class={className}
					name={name}
					onChange={handleChange}
					value={(values && values[name]) || ""}
				/>
				{showPasswordButton && (
					<ShowPasswordButton
						setShowPassword={() => setShowPassword(!showPassword)}
						showPassword={showPassword}
					/>
				)}
			</div>
			{errors[name] && (
				<span id="clientePass-errorMsg" class="form-text text-danger small">
					{`* ${errors[name]}`}
				</span>
			)}
		</>
	);
}
