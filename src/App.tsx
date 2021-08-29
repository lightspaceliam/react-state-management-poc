import { FC, useEffect } from 'react';
import ApplicationRouter from './applicationRouter/ApplicationRouter';
import { mockLocalStorageKey } from './common/Constants';
import { todoItems } from './mockData/mockTodos';

const App : FC = () => {
	//  HACK: seed local storage.
	useEffect(() => {
		const data: string | null = localStorage.getItem(mockLocalStorageKey);
		
		if(data === null){
			localStorage.setItem(mockLocalStorageKey, JSON.stringify(todoItems));
		}
	}, []);

	return <ApplicationRouter />;
}

export default App;
