import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';
import { useEffect, useRef } from 'react';

const useClick = (onClick) => {
	if (typeof onClick !== 'function') return;

	const element = useRef();

	useEffect(() => {
		if (element.current) {
			element.current.addEventListener('click', onClick);
		}
		return () => {
			if (element.current) {
				element.current.removeEventListener('click', onClick);
			}
		};
	}, []);
	return element;
};

const App = () => {
	const sayHello = () => console.log('hello!');
	const title = useClick(sayHello);
	return (
		<div className='App'>
			<h1 ref={title}>Hi</h1>
		</div>
		// <Router>
		// 	<Routes>
		// 		<Route path='/' element={<Home />} />
		// 		<Route path='/movie/:id' element={<Detail />} />
		// 	</Routes>
		// </Router>
	);
};

export default App;
