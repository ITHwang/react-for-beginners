import { useState } from 'react';

const useTabs = (initIndex, tabs) => {
	const [currentIndex, setCurrentIndex] = useState(initIndex);

	if (!tabs || !Array.isArray(tabs)) return;
	return {
		currentTab: tabs[currentIndex],
		changeTab: setCurrentIndex,
	};
};

export default useTabs;
