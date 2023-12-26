import axios from "axios";
const BASE_URL = "https://api.themoviedb.org/3";
const TOKEN =
	"eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNjYxMmQzZDNkNzNlMGZmMjk5YTZjZjBkYTI3Yzk1MiIsInN1YiI6IjY1Nzc1NDFiZWM4YTQzMDBmZDdkYzkyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.rR0Iva9J0bMbkPUnn5sJgnLCGk4lpVLu8dW71gUAuGI";
const headers = {
	authorization: "bearer " + TOKEN,
};
const fetchDataFromApi = async (url, params) => {
	try {
		const { data } = await axios.get(BASE_URL + url, {
			headers: headers,
			params: params,
		});
		return data;
	} catch (error) {
		console.log(error);
		return error;
	}
};

export default fetchDataFromApi;
