import axios from "axios";

export const getCoinsApi = async ({ page, currency }) => {
	const data = await axios
		.get(
			`${process.env.BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=${process.env.API_KEY}`,
		)
		.then((res) => res.data);
	return data;
};

export const searchCoinApi = async ({ search, signal }) => {
	const searchCoins = await axios
		.get(
			`${process.env.BASE_URL}/search?query=${search}&x_cg_demo_api_key=${process.env.API_KEY}`,
			{ signal },
		)
		.then(({ data }) => data.coins);
	return searchCoins;
};

export const getCoinChartApi = async ({ id }) => {
	const chartData = await axios
		.get(
			`${process.env.BASE_URL}/coins/${id}/market_chart?vs_currency=usd&days=7?x_cg_demo_api_key=${process.env.API_KEY}`,
		)
		.then((res) => res.data);
	return chartData;
};
