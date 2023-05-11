import React, { useEffect, useState } from "react";
import "./styles.css";
import Tmdb from "../../Tmdb";
import FilmRow from "../../components/FilmRow/FilmRow";
import { Container } from "../../styles/Container/Container";
import { Section } from "../../styles/Section/Section";
import PlayButton from "../../components/Buttons/PlayButton";
import { ListButton } from "../../styles/ListButton/ListButton";
import LoadingScreen from "../../components/LoadingScreen/LoadingScreen";

const Home = () => {
	const [apiData, setApiData] = useState([]);
	const [screenIsLoading, setScreenIsLoading] = useState(true);

	useEffect(() => {
		const loadAll = async () => {
			const list = await Tmdb.getHomeList();
			setApiData(list);
		};
		loadAll();
	}, []);

	return (
		<>
			{screenIsLoading && <LoadingScreen />}
			<Section>
				<div className="featured-film_background">
					<Container
						className="featured-film_container"
						dir="column"
						align="left"
						gap="20px"
					>
						<h1 className="featured-title">
							Ant-Man and the Wasp: Quantumania
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
							Scott Lang e Hope van Dyne em suas jornadas como
							super-heróis. Scott e sua família são puxados
							para o Reino Quântico, onde eles precisarão
							enfrentar um novo e terrível vilão: Kang, o
							Conquistador e M.O.D.O.K..
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
