const API_KEY = "15b4f93e6fa870a2f86547b3a35f4965";
const API_URL = "https://api.themoviedb.org/3";

const basicRequest = async (endpoint) => {
	const req = await fetch(`${API_URL}${endpoint}`);
	const json = await req.json();
	return json;
};

export default {
	getHomeList: async () => {
		return [
			{
				slug: "originals",
				title: "Originais da Netflix",
				items: await basicRequest(
					`/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
				),
			},
			{
				slug: "trending",
				title: "Recomendado para Você",
				items: await basicRequest(
					`/trending/all/week?language=pt-BR&api_key=${API_KEY}`
				),
			},
			{
				slug: "toprated",
				title: "Em Alta",
				items: await basicRequest(
					`/movie/top_rated?language=pt-BR&api_key=${API_KEY}`
				),
			},
			{
				slug: "action",
				title: "Ação",
				items: await basicRequest(
					`/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`
				),
			},
			{
				slug: "comedy",
				title: "Comédia",
				items: await basicRequest(
					`/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`
				),
			},
			{
				slug: "horror",
				title: "Terror",
				items: await basicRequest(
					`/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`
				),
			},
			{
				slug: "romance",
				title: "Romance",
				items: await basicRequest(
					`/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`
				),
			},
			{
				slug: "documentary",
				title: "Documentários",
				items: await basicRequest(
					`/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`
				),
			},
		];
	},
};
