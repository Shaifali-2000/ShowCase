import { useState, useEffect } from "react";
import fetchDataFromAPI from "./utils/api";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { getApiconfiguration } from "./store/homeSlice";

import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import SearchResult from "./pages/searchResult/SearchResult";
import Explore from "./pages/explore/Explore";
import Error404 from "./pages/404/Error404";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
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

	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/:mediaType/:id" element={<Details />} />
				<Route path="/search/:query" element={<SearchResult />} />
				<Route path="/explore/:mediaType" element={<Explore />} />
				<Route path="*" element={<Error404 />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
