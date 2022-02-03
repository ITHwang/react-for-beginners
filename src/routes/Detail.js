import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTabs from '../hooks/useTabs';

const Detail = () => {
	const [loading, setLoading] = useState(true);
	const { id } = useParams();

	const [movie, setMovie] = useState({});
	const [movieDetail, setMovieDetail] = useState([]);
	const { currentTab, changeTab } = useTabs(0, movieDetail);

	const getMovieDetail = (movie) => {
		return [
			{
				tab: 'story',
				content: movie.description_full,
			},
			{
				tab: 'rating',
				content: movie.rating,
			},
			{
				tab: 'url',
				content: movie.url,
			},
		];
	};

	const getMovie = () => {
		fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
			.then((response) => response.json())
			.then((json) => json.data.movie)
			.then((movie) => {
				setMovie(movie);
				return getMovieDetail(movie);
			})
			.then((movieDetail) => {
				setMovieDetail(movieDetail);
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
					<div>
						{movieDetail.map((section, index) => (
							<button key={index} onClick={() => changeTab(index)}>
								{section.tab}
							</button>
						))}
					</div>
					<div>{currentTab.content}</div>
				</div>
			)}
		</div>
	);
};

export default Detail;
