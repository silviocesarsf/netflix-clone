import React, { useState } from "react";
import "./styles.css";
import { Container } from "../../styles/Container/Container";

const FilmRow = ({ item, title }) => {
	return (
		<div className="film-row_container">
			<div className="title-section_film">
				<h2>{title}</h2>
			</div>
			<Container
				gap="20px"
				justify="left"
				className="film-row_content"
			>
				{item.results.length > 0 &&
					item.results.map((item, key) => (
						<img
							src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
							alt={title}
							key={key}
						/>
					))}
			</Container>
		</div>
	);
};

export default FilmRow;
