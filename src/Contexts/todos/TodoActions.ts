import {
    TodoActionTypes,
    Todo,
} from '../../interfaces/TodoModels';

export const readTodo = (todoItems: Array<Todo>): TodoActionTypes => ({
    type: 'READ',
    payload: todoItems
});

export const addTodo = (todo: Todo): TodoActionTypes => ({
    type: 'ADD',
    payload: todo
});

export const deleteTodo = (id: string): TodoActionTypes => ({
    type:'DELETE',
    payload: id
});