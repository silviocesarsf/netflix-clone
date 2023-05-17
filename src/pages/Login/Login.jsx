import React, { useContext, useEffect, useState } from "react";
import FormComponent from "../../components/FormComponent/FormComponent";
import { Input } from "../../styles/Input/Input";
import { ContextProvider } from "../../context/Context";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Login = () => {
	const { setIsLogged } = useContext(ContextProvider);

	const [emailLogin, setEmailLogin] = useState("");
	const [passwordLogin, setPasswordLogin] = useState("");
	const navigate = useNavigate();

	const handleEmailLogin = (e) => {
		setEmailLogin(e.target.value);
	};

	const handlePasswordLogin = (e) => {
		setPasswordLogin(e.target.value);
	};

	const userData = JSON.parse(localStorage.getItem("user_data"));

	const verifyData = (e) => {
		e.preventDefault();
		if (
			emailLogin === userData.email &&
			passwordLogin === userData.password
		) {
			toast.success("Acesso autorizado !", {
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
			setIsLogged(true);
			navigate("/");
		} else {
			toast.error("Email ou senha invalidos !", {
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
		}
	};

	useEffect(() => {
		console.log(userData);
	}, []);

	return (
		<FormComponent btnFunction={verifyData}>
			<ToastContainer />
			<Input
				onChange={handleEmailLogin}
				type="email"
				placeholder="Insira seu Email"
			/>
			<Input
				onChange={handlePasswordLogin}
				type="password"
				placeholder="Insira sua senha"
			/>
		</FormComponent>
	);
};

export default Login;
