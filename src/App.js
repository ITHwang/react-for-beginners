import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

import { useEffect, useState, useRef } from 'react';

// useFadeIn
const useFadeIn = (duration = 1, delay = 0) => {
	const element = useRef();

	useEffect(() => {
		if (typeof duration !== 'number' || typeof delay !== 'number') return;

		if (element.current) {
			const { current } = element;
			current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
			current.style.opacity = 1;
		}
	}, []);

	return { ref: element, style: { opacity: 0 } };
};

// useNetwork
// const useNetwork = (onChange) => {
// 	const [status, setStatus] = useState(navigator.onLine);

// 	const handleChange = () => {
// 		if (typeof onChange === 'function') onChange(navigator.onLine);
// 		setStatus(navigator.onLine);
// 	};

// 	useEffect(() => {
// 		window.addEventListener('online', handleChange);
// 		window.addEventListener('offline', handleChange);
// 		return () => {
// 			window.removeEventListener('online', handleChange);
// 			window.removeEventListener('offline', handleChange);
// 		};
// 	}, []);

// 	return status;
// };

const App = () => {
	// useNetwork
	// const handleNetworkChange = (online) => {
	// 	console.log(online ? 'We just went online' : 'We are offline');
	// };
	// const onLine = useNetwork(handleNetworkChange);

	// useFadeIn
	const fadeInH1 = useFadeIn();
	const fadeInP = useFadeIn();

	return (
		<div className='App'>
			<h1 {...fadeInH1}>Hello</h1>
			<p {...fadeInP}>dfdfddfdf</p>
			{/* <h1>{onLine ? 'Online' : 'offline'}</h1> */}
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
