import { Dispatch } from 'react';

export interface Todo {
    id: string;
    title: string;
    isActive: boolean;
}

export interface TodoInitialState {
    todos: Array<Todo>;
}

export interface ContextModel {
    state: TodoInitialState;
    dispatch: Dispatch<TodoActionTypes>;
}

export type TodoActionTypes = 
    | { type: 'ADD'; payload: Todo }
    | { type: 'READ'; payload: Array<Todo> }
    | { type: 'DELETE'; payload: string };