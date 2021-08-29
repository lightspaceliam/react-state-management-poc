import { Todo } from '../interfaces/TodoModels';

export const todos: Array<Todo> = [
    { id: new Date(Date.now() + 1).getTime().toString(), title: 'Todo 1' },
    { id: new Date(Date.now() + 2).getTime().toString(), title: 'Todo 2' },
    { id: new Date(Date.now() + 3).getTime().toString(), title: 'Todo 3' },
];