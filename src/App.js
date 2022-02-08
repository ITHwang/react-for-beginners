import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import Detail from './routes/Detail';

import { useConfirm } from './hooks/useConfirm';
import { usePreventLeave } from './hooks/usePreventLeave';

const App = () => {
	const deleteWorld = () => console.log('Deleting the world');
	const abort = () => console.log('Aborted');
	const confirmDelete = useConfirm('Are you sure', deleteWorld, abort);

	const { enablePrevent, disablePrevent } = usePreventLeave();

	return (
		<div className='App'>
			<div>
				<button onClick={confirmDelete}>delete world</button>
			</div>

			<div>
				<button onClick={enablePrevent}>protect</button>
				<button onClick={disablePrevent}>unprotect</button>
			</div>
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
