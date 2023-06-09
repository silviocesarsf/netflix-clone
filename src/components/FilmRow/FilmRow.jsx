import React, {
	useContext,
	useRef,
	useState,
	useEffect,
	useCallback,
} from "react";
import "./styles.css";
import { Container } from "../../styles/Container/Container";
import Aos from "aos";
import {
	HiOutlineChevronLeft,
	HiOutlineChevronRight,
} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import { ContextProvider } from "../../context/Context";

const FilmRow = ({ item, title, setScreenIsLoading }) => {
	const {
		setSelectedMovie,
		selectedMovie,
		isModalOpen,
		setIsModalOpen,
	} = useContext(ContextProvider);

	const navigate = useNavigate();
	const carousel = useRef(null);

	const disableLoaderScreen = () => {
		setTimeout(() => {
			setScreenIsLoading(false);
		}, 2000);
	};

	const handleLeftArrow = (e) => {
		e.preventDefault();
		carousel.current.scrollLeft -= carousel.current.offsetWidth;
	};

	const handleRightArrow = (e) => {
		e.preventDefault();
		carousel.current.scrollLeft += carousel.current.offsetWidth;
	};

	const handleImageClick = useCallback(
		(item) => {
			setSelectedMovie("");
			setSelectedMovie((prevData) => [...prevData, item]);
			setIsModalOpen(true);
		},
		[setSelectedMovie, setIsModalOpen]
	);

	useEffect(() => {
		Aos.init();
	}, []);

	return (
		<div className="film-row_container">
			<div className="title-section_film">
				<h2 data-aos="fade-left">{title}</h2>
			</div>
			<Container>
				<div className="film-row_left" onClick={handleLeftArrow}>
					<HiOutlineChevronLeft style={{ fontSize: "2em" }} />
				</div>
				<Container
					gap="20px"
					justify="left"
					className="film-row_content"
					data-aos="fade-up"
					ref={carousel}
				>
					{item.results.length > 0 &&
						item.results.map((item, key) => (
							<img
								onClick={() => handleImageClick(item)}
								key={key}
								onLoad={disableLoaderScreen}
								src={`https://image.tmdb.org/t/p/w200${item.poster_path}`}
								alt={item.original_title}
							/>
						))}
				</Container>
				<div
					className="film-row_right"
					onClick={handleRightArrow}
				>
					<HiOutlineChevronRight style={{ fontSize: "2em" }} />
				</div>
			</Container>
		</div>
	);
};

export default FilmRow;
