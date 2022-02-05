import PropTypes from 'prop-types';
import useTabs from '../hooks/useTabs';
import { useState, useEffect } from 'react';

const MovieDetail = ({ movie }) => {
	const [movieDetail, setMovieDetail] = useState([]);
	const [loading, setLoading] = useState(true);
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
		setLoading(false); //virtual dom을 이용해 부분적으로 렌더링하므로 loading을 통해 전체적으로 렌더링 해주기
	}, []);

	return (
		<div>
			{loading ? null : (
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
