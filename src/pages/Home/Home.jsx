import React, { useContext, useEffect, useState } from "react";
import "./styles.css";
import Tmdb from "../../Tmdb";
import FilmRow from "../../components/FilmRow/FilmRow";
import { Container } from "../../styles/Container/Container";
import { Section } from "../../styles/Section/Section";
import PlayButton from "../../components/Buttons/PlayButton/PlayButton";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";
import ListButton from "../../components/Buttons/ListButton/ListButton";
import { ContextProvider } from "../../context/Context";
import ViewMoreScreen from "../../components/ViewMoreScreen/ViewMoreScreen";

const Home = () => {
	const { isModalOpen, setIsModalOpen } =
		useContext(ContextProvider);

	const [apiData, setApiData] = useState([]);
	const [screenIsLoading, setScreenIsLoading] = useState(true);

	useEffect(() => {
		const loadAll = async () => {
			const list = await Tmdb.getHomeList();
			setApiData(list);
		};
		loadAll();
	}, []);

	// Todo:
	// [x] Fazer uma página para os detalhes do filme
	// [] Terminar sistema de login e cadastro
	// [] Terminar sistema de troca de contas
	// [] Otimizar o código

	return (
		<>
			{screenIsLoading && <LoadingScreen />}
			{isModalOpen && <ViewMoreScreen />}
			<Section>
				<div className="featured-film_background">
					<Container
						className="featured-film_container"
						dir="column"
						align="left"
						gap="20px"
					>
						<h1 className="featured-title">
							Avatar O Caminho da Água
						</h1>
						<Container gap="20px" justify="left">
							<div className="featured-avaliation">
								9.5 Pontos
							</div>
							<div className="featured-launch">2023</div>
						</Container>
						<Container
							width="100%"
							className="featured-synopse"
						>
							decorre uma década após os acontecimentos do
							primeiro filme e conta a história da família
							Sully (Jake, Neytiri e os seus filhos), os seus
							problemas, as longas distâncias que vão percorrer
							para se manterem a salvo, as batalhas que lutam
							para se manterem vivos, e as tragédias que
							suportam.
						</Container>
						<Container justify="left" gap="20px">
							<PlayButton>Assistir</PlayButton>
							<ListButton>Minha Lista</ListButton>
						</Container>
						<div className="featured-genres">
							<p>Gêneros: Drama, Comédia, Animação.</p>
						</div>
					</Container>
				</div>
				<div className="container-films">
					{apiData &&
						apiData.map((item, key) => (
							<FilmRow
								setScreenIsLoading={setScreenIsLoading}
								title={item.title}
								item={item.items}
								key={key}
							/>
						))}
				</div>
			</Section>
		</>
	);
};

export default Home;
