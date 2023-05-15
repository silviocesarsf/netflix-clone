import React from "react";
import { Container } from "../../styles/Container/Container";
import { Oval } from "react-loader-spinner";
import Aos from "aos";

const LoadingScreen = () => {
	Aos.init();
	return (
		<Container
			style={{
				position: "fixed",
				top: "0%",
				left: "0%",
				backgroundColor: "black",
				zIndex: 30,
			}}
			height="100vh"
			width="100%"
			dir="column"
			gap="30px"
			data-aos="zoom-out"
		>
			<Oval
				height={80}
				width={80}
				color="#a94d4d"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
				ariaLabel="oval-loading"
				secondaryColor="#000000"
				strokeWidth={2}
				strokeWidthSecondary={2}
			/>
			<span>Carregando...</span>
		</Container>
	);
};

export default LoadingScreen;
