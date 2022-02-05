import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';

const Detail = () => {
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [movie, setMovie] = useState({});

	const getMovie = () => {
		fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
			.then((response) => response.json())
			.then((json) => json.data.movie)
			.then((movie) => {
				setMovie(movie);
				setLoading(false);
			});
	};

	useEffect(() => {
		getMovie();
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
