import PropTypes from 'prop-types';
import useTabs from '../hooks/useTabs';
import { useState, useEffect } from 'react';

const MovieDetail = ({ movie }) => {
	const [loading, setLoading] = useState(true);
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

	useEffect(() => {
		setMovieDetail(getMovieDetail(movie));
		setLoading(false);
	}, []);

	return (
		<div>
			{loading ? (
				<h1>wait...</h1>
			) : (
				<div>
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

MovieDetail.propTypes = {
	movie: PropTypes.object.isRequired,
};

export default MovieDetail;
