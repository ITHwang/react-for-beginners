import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

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

	return (
		// <div className='App'>
		// </div>
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movie/:id' element={<Detail />} />
			</Routes>
		</Router>
	);
};

export default App;
