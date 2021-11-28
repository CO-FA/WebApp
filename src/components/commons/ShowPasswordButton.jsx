import React from "react";

export default function ShowPasswordButton({ setShowPassword, showPassword }) {
	return (
		<div className="input-group-append">
			<button
				className="btn border border-left-0"
				type="button"
				onClick={setShowPassword}
			>
				{!showPassword && (
					<span className="eye d-block">
						<svg
							className="mt-0"
							width="24"
							height="14"
							viewBox="0 0 24 14"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M23.6001 6.45997C22.9256 5.5607 21.227 3.63729 18.6042 2.18848L16.1562 4.63647C16.5309 5.31091 16.7307 6.08528 16.7307 6.93458C16.7307 9.60739 14.5575 11.7556 11.9096 11.7556C11.0853 11.7556 10.311 11.5558 9.61155 11.1811L7.96289 12.8297C9.16191 13.1795 10.4608 13.4043 11.9096 13.4043C18.4543 13.4043 22.451 8.90797 23.625 7.4092C23.7999 7.13442 23.7999 6.73474 23.6001 6.45997Z"
								fill="#000000"
							/>
							<path
								d="M7.63749 9.20767C7.2628 8.53322 7.06296 7.75887 7.06296 6.93454C7.06296 4.26173 9.2112 2.1135 11.884 2.1135C12.7083 2.1135 13.4827 2.31333 14.1821 2.68803L15.8308 1.03938C14.6317 0.689672 13.3328 0.464844 11.884 0.464844C5.33938 0.464844 1.34265 4.96115 0.168612 6.45992C-0.0562039 6.7347 -0.0562039 7.13438 0.168612 7.40916C0.843058 8.30842 2.54166 10.2318 5.16451 11.6806L7.63749 9.20767Z"
								fill="#000000"
							/>
							<path
								d="M8.38672 6.93463C8.38672 7.38426 8.46166 7.83389 8.63651 8.20858L13.1578 3.6873C12.7581 3.53742 12.3335 3.4375 11.8838 3.4375C9.96043 3.4375 8.38672 5.01121 8.38672 6.93463Z"
								fill="#000000"
							/>
							<path
								d="M11.8833 10.4322C13.8067 10.4322 15.3805 8.8585 15.3805 6.93508C15.3805 6.48545 15.3055 6.0608 15.1307 5.66113L10.6094 10.1824C10.9841 10.3323 11.4337 10.4322 11.8833 10.4322Z"
								fill="#000000"
							/>
						</svg>
					</span>
				)}
				{showPassword && (
					<span className="eye-splash">
						<svg
							className="mt-0"
							width="24"
							height="19"
							viewBox="0 0 24 21"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M23.6001 10.46C22.9256 9.5607 21.227 7.63729 18.6042 6.18848L16.1562 8.63647C16.5309 9.31091 16.7307 10.0853 16.7307 10.9346C16.7307 13.6074 14.5575 15.7556 11.9096 15.7556C11.0853 15.7556 10.311 15.5558 9.61155 15.1811L7.96289 16.8297C9.16191 17.1795 10.4608 17.4043 11.9096 17.4043C18.4543 17.4043 22.451 12.908 23.625 11.4092C23.7999 11.1344 23.7999 10.7347 23.6001 10.46Z"
								fill="#828282"
							/>
							<path
								d="M7.63749 13.2077C7.2628 12.5332 7.06296 11.7589 7.06296 10.9345C7.06296 8.26173 9.2112 6.1135 11.884 6.1135C12.7083 6.1135 13.4827 6.31333 14.1821 6.68803L15.8308 5.03938C14.6317 4.68967 13.3328 4.46484 11.884 4.46484C5.33938 4.46484 1.34265 8.96115 0.168612 10.4599C-0.0562039 10.7347 -0.0562039 11.1344 0.168612 11.4092C0.843058 12.3084 2.54166 14.2318 5.16451 15.6806L7.63749 13.2077Z"
								fill="#828282"
							/>
							<path
								d="M8.38672 10.9346C8.38672 11.3843 8.46166 11.8339 8.63651 12.2086L13.1578 7.6873C12.7581 7.53742 12.3335 7.4375 11.8838 7.4375C9.96043 7.4375 8.38672 9.01121 8.38672 10.9346Z"
								fill="#828282"
							/>
							<path
								d="M11.8833 14.4322C13.8067 14.4322 15.3805 12.8585 15.3805 10.9351C15.3805 10.4855 15.3055 10.0608 15.1307 9.66113L10.6094 14.1824C10.9841 14.3323 11.4337 14.4322 11.8833 14.4322Z"
								fill="#828282"
							/>
							<path
								d="M21.6264 1.19277C21.3017 0.868035 20.7771 0.868035 20.4524 1.19277L2.16738 19.4778C1.84264 19.8025 1.84264 20.3271 2.16738 20.6518C2.34223 20.8267 2.54208 20.9016 2.76689 20.9016C2.99171 20.9016 3.19155 20.8267 3.36641 20.6518L21.6514 2.36681C21.9511 2.06705 21.9512 1.5175 21.6264 1.19277Z"
								fill="#828282"
							/>
						</svg>
					</span>
				)}
			</button>
		</div>
	);
}
