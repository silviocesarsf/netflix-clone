import React, { useState } from "react";
import "./styles.css";
import { Container } from "../../styles/Container/Container";
import Aos from "aos";

const FilmRow = ({ item, title, setScreenIsLoading }) => {
	const disableLoaderScreen = () => {
		setTimeout(() => {
			setScreenIsLoading(false);
		}, 2000);
	};

	Aos.init();

	return (
		<div className="film-row_container">
			<div className="title-section_film">
				<h2 data-aos="fade-left">{title}</h2>
			</div>
			<Container
				gap="20px"
				justify="left"
				className="film-row_content"
			>
				{item.results.length > 0 &&
					item.results.map((item, key) => (
						<img
							data-aos="fade-up"
							onLoad={disableLoaderScreen}
							src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
							alt={item.original_title}
							key={key}
						/>
					))}
			</Container>
		</div>
	);
};

export default FilmRow;
