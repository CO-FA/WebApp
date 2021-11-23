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
	placeholder
}) {
	const [showPassword, setShowPassword] = useState(false);
	return (
		<>
			<label htmlFor={name}>{label}</label>
			<div className="input-group" id={"inputGroup" + name}>
				<Field
					type={!showPassword ? type : "text"}
					className={className}
					name={name}
					id={name}
					placeholder={placeholder}
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
				<span id="clientePass-errorMsg" className="form-text text-danger small">
					{`* ${errors[name]}`}
				</span>
			)}
		</>
	);
}
