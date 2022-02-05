import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

import { useState, useEffect } from 'react';

const useTitle = (initTitle) => {
	const [title, setTitle] = useState(initTitle);

	const updateTitle = () => {
		const htmlTitle = document.querySelector('title');
		htmlTitle.innerHTML = title;
	};

	useEffect(updateTitle, [title]);

	return setTitle;
};

const App = () => {
	const titleUpdater = useTitle('Loading...');

	setTimeout(() => titleUpdater('home'), 3000);

	return (
		// <Router>
		// 	<Routes>
		// 		<Route path='/' element={<Home />} />
		// 		<Route path='/movie/:id' element={<Detail />} />
		// 	</Routes>
		// </Router>
		<div className='App'>
			<div>Hi</div>
		</div>
	);
};

export default App;
