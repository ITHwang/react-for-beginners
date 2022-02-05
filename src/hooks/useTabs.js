import { useState } from 'react';

const useTabs = (initIndex, tabs) => {
	const [currentIndex, setCurrentIndex] = useState(initIndex);

	return {
		currentTab: tabs[currentIndex],
		changeTab: setCurrentIndex,
	};
};

export default useTabs;
