import React from 'react';
import { Col, Card, Row } from 'antd';
import { EyeOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

import './MovieCatalog.scss';

export default function MovieCatalog(props) {
	const {
		movies: { results },
	} = props;

	return results.map((movie) => (
		<div key={movie.id} className="movie-catalog">
			<MovieCard movie={movie} />
		</div>
	));
}

function MovieCard(props) {
	const {
		movie: { id, title, poster_path },
	} = props;
	const { Meta } = Card;
	const posterPath = `https://image.tmdb.org/t/p/original/${poster_path}`;

	return (
		<Link to={`/movie/${id}`}>
			<Card
				hoverable
				style={{ width: 240 }}
				cover={<img alt={title} src={posterPath} />}
				actions={[<EyeOutlined />]}>
				<Meta title={title} />
			</Card>
		</Link>
	);
}
