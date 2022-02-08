import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

const App = () => {
	return (
		// <div className='App'>
		// 	<h1>Hello</h1>
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
