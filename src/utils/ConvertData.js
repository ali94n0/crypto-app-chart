export const ConvertData = ({ data, type }) => {
	const convertedData = data[type].map((item) => {
		return {
			date: new Date(item[0]).toLocaleDateString(),
			[type]: item[1],
		};
	});
	return convertedData;
};
