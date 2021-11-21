import React, { useState } from "react";
import ShowPasswordButton from "./ShowPasswordButton";
import { Field } from "formik";

export default function Input({
	type,
	className,
	name,
	showPasswordButton,
	errors,
	label,
	values,
}) {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<>
			<label for={name}>{label}</label>
			<div class="input-group" id={"inputGroup" + name}>
				<Field
					type={!showPassword ? type : "text"}
					className={className}
					name={name}
					id={name}
					value="masculino"
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
