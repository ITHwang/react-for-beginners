import { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import MovieDetail from '../components/MovieDetail';
import { usePreventLeave } from '../hooks/usePreventLeave';
import { element } from 'prop-types';

import { useFadeIn } from 'react';

const Detail = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState({});
	const changeTitle = useTitle('loading...');

	const getMovie = async () => {
		const response = await fetch(
			`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
		);
		const json = await response.json();
		const movie = await json.data.movie;
		setMovie(movie);
		return Promise.resolve();
	};

	const imgRef = useRef();
	const duration = 2;
	const delay = 1;

	const { enablePrevent, disablePrevent } = usePreventLeave();
	useEffect(() => {
		enablePrevent();
		getMovie().then(() => {
			setLoading(false);
			changeTitle('Detail of movie');
		});
	}, []);

	useEffect(() => {
		const { current } = imgRef;
		current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
		current.style.opacity = 1;
	});

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					<h1>{movie.title_long}</h1>
					<img
						src={movie.medium_cover_image}
						alt={movie.title}
						ref={imgRef}
						style={{ opacity: 0 }}
					/>
					<MovieDetail movie={movie} />
				</div>
			)}
		</div>
	);
};

export default Detail;
