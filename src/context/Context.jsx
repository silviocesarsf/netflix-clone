import { createContext, useState } from "react";

export const ContextProvider = createContext();

export const Context = ({ children }) => {
	const [isLogged, setIsLogged] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isImageLoading, setIsImageLoading] = useState(true);
	const [selectedMovie, setSelectedMovie] = useState([]);

	return (
		<ContextProvider.Provider
			value={{
				isLogged,
				setIsLogged,
				selectedMovie,
				setSelectedMovie,
				isModalOpen,
				setIsModalOpen,
				isImageLoading,
				setIsImageLoading,
			}}
		>
			{children}
		</ContextProvider.Provider>
	);
};
