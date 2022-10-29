import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import { useNavigate, useLocation } from 'react-router-dom';
import { Row, Col, Input } from 'antd';
import MovieCatalog from '../../components/MovieCatalog';
import Footer from '../../components/Footer';
import { URL_API, API } from '../../utils/contants';

import './search.scss';

export const Search = () => {
	const location = useLocation();
	const [movieList, setMovieList] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const navigate = useNavigate();

	useEffect(() => {
		(async () => {
			const searchValue = queryString.parseUrl(location.search);
			const { s } = searchValue.query;

			if (s) {
				const response = await fetch(
					`${URL_API}/search/movie?api_key=${API}&language=en-US&query=${s}&page=1`
				);

				const movies = await response.json();
				setSearchValue(s);
				setMovieList(movies);
			}
		})();
	}, [location.search]);

	const onChangeSerach = (e) => {
		const urlParams = queryString.parse(location.search);
		urlParams.s = e.target.value;
		navigate(`?${queryString.stringify(urlParams)}`);
		setSearchValue(e.target.value);
	};

	return (
		<Row>
			<Col span={12} offset={6} className="search">
				<h1>Look for your movie</h1>
				<Input value={searchValue} onChange={onChangeSerach} />
			</Col>
			{movieList.results && (
				<Row span={24}>
					<div className="movie-catalog">
						<MovieCatalog movies={movieList} />
					</div>
				</Row>
			)}
			<Col span={24}>
				<Footer />
			</Col>
		</Row>
	);
};

export default Search;
