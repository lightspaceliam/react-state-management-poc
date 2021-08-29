import { Dispatch } from 'react';
import { ModelBase } from './ModelBase';

export interface Todo extends ModelBase {
    title: string;
}

export interface InitialTodoState {
    todos: Array<Todo>;
}

export interface ContextModel {
    state: InitialTodoState;
    dispatch: Dispatch<TodoActionTypes>;
}

export type TodoActionTypes = 
    | { type: 'ADD'; payload: Todo }
    | { type: 'READ'; payload: Array<Todo> }
    | { type: 'DELETE'; payload: string };