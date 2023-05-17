import React, { useContext, useEffect, useState } from "react";
import { Container } from "../../styles/Container/Container";
import "../../assets/bg-netflix_login.svg";
import FormComponent from "../../components/FormComponent/FormComponent";
import { Input } from "../../styles/Input/Input";
import { ContextProvider } from "../../context/Context";
import { ContextProviderUser } from "../../context/UserAccount";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";

const Register = () => {
	const {
		setEmailReg,
		setPasswordReg,
		setNameReg,
		setDateReg,
		userAccObj,
		emailReg,
		passwordReg,
		nameReg,
		dateReg,
	} = useContext(ContextProviderUser);

	const navigate = useNavigate();

	const handleEmailValue = (e) => {
		setEmailReg(e.target.value);
	};
	const handlePasswordValue = (e) => {
		setPasswordReg(e.target.value);
	};
	const handleNameValue = (e) => {
		setNameReg(e.target.value);
	};
	const handleDateValue = (e) => {
		setDateReg(e.target.value);
	};

	const persistedData = (e) => {
		e.preventDefault();
		if (
			emailReg.length === 0 ||
			passwordReg.length === 0 ||
			nameReg.length === 0 ||
			dateReg.length === 0
		) {
			return toast.error("Verifique as informações !", {
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
		} else {
			localStorage.setItem(
				"user_data",
				JSON.stringify(userAccObj)
			);
			toast.success("Cadastro realizado !", {
				position: "top-right",
				autoClose: 2000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: "dark",
			});
			navigate("/login");
		}
	};

	useEffect(() => {
		console.log(localStorage.getItem("user_data"));
	}, []);

	return (
		<FormComponent btnFunction={persistedData} registered={true}>
			<ToastContainer />
			<Input
				onChange={handleEmailValue}
				type="email"
				placeholder="Email ou número de telefone"
			/>
			<Input
				onChange={handlePasswordValue}
				type="password"
				placeholder="Senha"
			/>
			<Input
				onChange={handleNameValue}
				type="text"
				placeholder="Seu nome"
			/>
			<Input
				onChange={handleDateValue}
				type="date"
				placeholder="Nascimento"
			/>
		</FormComponent>
	);
};

export default Register;
