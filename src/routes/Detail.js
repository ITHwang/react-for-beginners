import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTitle from '../hooks/useTitle';
import MovieDetail from '../components/MovieDetail';

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

	useEffect(() => {
		getMovie().then(() => {
			setLoading(false);
			changeTitle('Detail of movie');
		});
	}, []);

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					<h1>{movie.title_long}</h1>
					<img src={movie.medium_cover_image} alt={movie.title} />
					<MovieDetail movie={movie} />
				</div>
			)}
		</div>
	);
};

export default Detail;
