import { useState, useEffect } from "react";
import fetchDataFromAPI from "./utils/api";

import { useSelector, useDispatch } from "react-redux";
import { getApiconfiguration } from "./store/homeSlice";
function App() {
	const dispatch = useDispatch();
	const { url } = useSelector((state) => state.home.url);
	function testing() {
		fetchDataFromAPI("/movie/popular").then((res) => {
			console.log(res);
			dispatch(getApiconfiguration(res));
		});
	}

	useEffect(() => {
		testing();
	}, []);

	return <div>App</div>;
}

export default App;
