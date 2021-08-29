import { FC } from 'react';
import { Provider as TodoProvider } from './contexts/todo/TodoContext';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';

const App : FC = () => {

	return (
		<div>
			<h1>Todos</h1>
			<TodoProvider>
				<TodoList />
				<AddTodo />
			</TodoProvider>
		</div>
  	);
}

export default App;
