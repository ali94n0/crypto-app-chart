import axios from "axios";

export const getCoins = async ({ page, currency }) => {
	const data = await axios
		.get(
			`${process.env.BASE_URL}/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=20&page=${page}&sparkline=false&locale=en&x_cg_demo_api_key=${process.env.API_KEY}`,
		)
		.then((res) => res.data);
	return data;
};
