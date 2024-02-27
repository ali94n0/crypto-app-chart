import axios from "axios";

export const getCoins = async () => {
	const data = await axios
		.get(
			`${process.env.BASE_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&sparkline=false&locale=en&x_cg_demo_api_key=${process.env.API_KEY}`,
		)
		.then((res) => res.data);
	return data;
};
