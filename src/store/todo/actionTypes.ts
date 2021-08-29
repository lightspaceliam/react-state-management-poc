import { Action } from 'redux';
import { Todo } from '../../interfaces/TodoModels';

export enum TodoActionKeys {
    REQUEST_CREATE_TODO = 'REQUEST_CREATE_TODO',
    RESPONSE_CREATE_TODO = 'RESPONSE_CREATE_TODO',
    ERROR_CREATE_TODO = 'ERROR_CREATE_TODO',

    REQUEST_READ_TODOS = 'REQUEST_READ_TODOS',
    RESPONSE_READ_TODOS = 'RESPONSE_READ_TODOS',
    ERROR_READ_TODOS = 'ERROR_READ_TODOS',

    REQUEST_EDIT_TODO = 'REQUEST_EDIT_TODO',
    RESPONSE_EDIT_TODO = 'RESPONSE_EDIT_TODO',
    ERROR_EDIT_TODO = 'ERROR_EDIT_TODO',

    REQUEST_UPDATE_TODO = 'REQUEST_UPDATE_TODO',
    RESPONSE_UPDATE_TODO = 'RESPONSE_UPDATE_TODO',
    ERROR_UPDATE_TODO = 'ERROR_UPDATE_TODO',

    REQUEST_DELETE_TODO = 'REQUEST_DELETE_TODO',
    RESPONSE_DELETE_TODO = 'RESPONSE_DELETE_TODO',
    ERROR_DELETE_TODO = 'ERROR_DELETE_TODO',
}

/**
 * Create.
 */
export interface RequestCreateTodo extends Action {
    readonly type: typeof TodoActionKeys.REQUEST_CREATE_TODO;
}

export interface ResponseCreateTodo extends Action {
    readonly type: typeof TodoActionKeys.RESPONSE_CREATE_TODO;
    readonly model: Todo;
}

export interface ErrorCreateTodo extends Action {
    readonly type: typeof TodoActionKeys.ERROR_CREATE_TODO;
    readonly errorMessage: string;
}

/**
 * Read.
 */
export interface RequestReadTodos extends Action {
    readonly type: typeof TodoActionKeys.REQUEST_READ_TODOS;
}

export interface ResponseReadTodos extends Action {
    readonly type: typeof TodoActionKeys.RESPONSE_READ_TODOS;
    readonly models: Array<Todo>;
}

export interface ErrorReadTodos extends Action {
    readonly type: typeof TodoActionKeys.ERROR_READ_TODOS;
    readonly errorMessage: string;
}

/**
 * Edit. 
 */
export interface RequestEditTodo extends Action {
    readonly type: typeof TodoActionKeys.REQUEST_EDIT_TODO;
}

export interface ResponseEditTodo extends Action {
    readonly type: typeof TodoActionKeys.RESPONSE_EDIT_TODO;
    readonly model: Todo;
}

export interface ErrorEditTodo extends Action {
    readonly type: typeof TodoActionKeys.ERROR_EDIT_TODO;
    readonly errorMessage: string;
}

/**
 * Update. 
 */
export interface RequestUpdateTodo extends Action {
    readonly type: typeof TodoActionKeys.REQUEST_UPDATE_TODO;
}

export interface ResponseUpdateTodo extends Action {
    readonly type: typeof TodoActionKeys.RESPONSE_UPDATE_TODO;
    readonly model: Todo;
}

export interface ErrorUpdateTodo extends Action {
    readonly type: typeof TodoActionKeys.ERROR_UPDATE_TODO;
    readonly errorMessage: string;
}

/**
 * Delete.
 */
export interface RequestDeleteTodo extends Action {
    readonly type: typeof TodoActionKeys.REQUEST_DELETE_TODO;
}

export interface ResponseDeleteTodo extends Action {
    readonly type: typeof TodoActionKeys.RESPONSE_DELETE_TODO;
    readonly id: string;
}

export interface ErrorDeleteTodo extends Action {
    readonly type: typeof TodoActionKeys.ERROR_DELETE_TODO;
    readonly errorMessage: string;
}

/**
 * Action Types.
 */
export type TodoActionTypes = 
    RequestCreateTodo
    | ResponseCreateTodo
    | ErrorCreateTodo
    
    | RequestReadTodos
    | ResponseReadTodos
    | ErrorReadTodos

    | RequestEditTodo
    | ResponseEditTodo
    | ErrorEditTodo

    | RequestUpdateTodo
    | ResponseUpdateTodo
    | ErrorUpdateTodo

    | RequestDeleteTodo
    | ResponseDeleteTodo
    | ErrorDeleteTodo;