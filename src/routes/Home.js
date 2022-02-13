import { useEffect, useState } from 'react';
import useTitle from '../hooks/useTitle';
import Movie from '../components/Movie';

import { useScroll } from '../hooks/useScroll';
import HomeHeaderUnscrolled from '../components/HomeHeaderUnscrolled';
import HomeHeaderScrolled from '../components/HomeHeaderScrolled';

const Home = () => {
	const [loading, setLoading] = useState(true);
	const [movies, setMovies] = useState([]);
	const changeTitle = useTitle('loading...');

	const getMovies = async () => {
		const response = await fetch(
			`https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
		);
		const json = await response.json();
		setMovies(json.data.movies);
		return Promise.resolve();
	};

	useEffect(() => {
		getMovies().then(() => {
			changeTitle('Home');
			setLoading(false);
		});
	}, []);

	const { y } = useScroll();

	return (
		<div>
			{loading ? (
				<h1>Loading...</h1>
			) : (
				<div>
					{y < 400 ? <HomeHeaderUnscrolled /> : <HomeHeaderScrolled />}
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
