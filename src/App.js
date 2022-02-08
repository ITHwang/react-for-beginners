import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

import { usePreventLeave } from './hooks/usePreventLeave';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/movie/:id' element={<Detail />} />
			</Routes>
		</Router>
	);
};

export default App;
