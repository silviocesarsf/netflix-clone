import { createContext, useState } from "react";

export const ContextProviderUser = createContext();

export const ContextUser = ({ children }) => {
	const [emailReg, setEmailReg] = useState("");
	const [passwordReg, setPasswordReg] = useState("");
	const [nameReg, setNameReg] = useState("");
	const [dateReg, setDateReg] = useState("");

	const userAccObj = {
		email: emailReg,
		password: passwordReg,
		name: nameReg,
		date: dateReg,
	};

	return (
		<ContextProviderUser.Provider
			value={{
				setEmailReg,
				emailReg,
				setPasswordReg,
				passwordReg,
				setNameReg,
				nameReg,
				setDateReg,
				dateReg,
				userAccObj,
			}}
		>
			{children}
		</ContextProviderUser.Provider>
	);
};
