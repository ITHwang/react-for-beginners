import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import useInput from '../hooks/useInput';

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);

	const maxLen = (value) => value.length <= 10;
	const id = useInput('', maxLen);
	const pw = useInput('', maxLen);

	const getMovies = async () => {
		const response = await fetch(
			`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
		);
		const json = await response.json();
		setMovies(json.data.movies);
		setLoading(false);
	};

	useEffect(() => getMovies(), []);
	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					<h1>Movie List</h1>
					<input placeholder='ID' {...id} />
					<input type='password' placeholder='PW' {...pw} />
					<hr />
					<div>
						{movies.map((movie) => (
							<Movie
								key={movie.id}
								id={movie.id}
								mediumCoverImage={movie.medium_cover_image}
								title={movie.title}
								summary={movie.summary}
								genres={movie.genres}
							/>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Home;
