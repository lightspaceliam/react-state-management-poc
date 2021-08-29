import { Dispatch } from 'redux';
import { mockLocalStorageKey } from '../../common/Constants';
import { Todo } from '../../interfaces/TodoModels';
import { TodoActionKeys as Keys, TodoActionTypes } from './actionTypes';
import { updateModel, deleteModel } from '../../helpers/dataResponse';

const mockDelay = 900;

export const create = (model: Todo) => {
    return async (dispatch: Dispatch<TodoActionTypes>) => {
        dispatch({
            type: Keys.REQUEST_CREATE_TODO
        });
        
        try {
            const data: string | null = localStorage.getItem(mockLocalStorageKey);

            if(data === null){
                localStorage.setItem(mockLocalStorageKey, JSON.stringify([model]));
            }
            else{
                const todos = JSON.parse(data);
                localStorage.setItem(mockLocalStorageKey, JSON.stringify([...todos, model]));
            }

            setTimeout(() => {  
                
                dispatch({
                    type: Keys.RESPONSE_CREATE_TODO,
                    model,
                });    
            }, mockDelay);
            
        } catch(e) {
            dispatch({
                type: Keys.ERROR_READ_TODOS,
                errorMessage: e.error,
            });
        }
    }
};

export const read = () => {
    return async (dispatch: Dispatch<TodoActionTypes>) => {
        dispatch({
            type: Keys.REQUEST_READ_TODOS
        });
        
        try {
            const data: string | null = localStorage.getItem(mockLocalStorageKey);

            setTimeout(() => {  
                
                dispatch({
                    type: Keys.RESPONSE_READ_TODOS,
                    models: data === null ? [] : JSON.parse(data),
                });    
            }, mockDelay);
            
        } catch(e) {
            dispatch({
                type: Keys.ERROR_READ_TODOS,
                errorMessage: e.error,
            });
        }
    }
};

export const edit = (id: string) => {
    return async (dispatch: Dispatch<TodoActionTypes>) => {
        dispatch({
            type: Keys.REQUEST_EDIT_TODO
        });
        
        try {
            const data: string | null = localStorage.getItem(mockLocalStorageKey);
        
            if(data === null){
                throw Error('Todo not found.');
            }
            const todos = JSON.parse(data);
            const model = todos.filter((p: Todo) => (p.id === id));
            
            setTimeout(() => {  
                
                dispatch({
                    type: Keys.RESPONSE_EDIT_TODO,
                    model: model[0]
                });    
            }, mockDelay);
            
        } catch(e) {
            dispatch({
                type: Keys.ERROR_EDIT_TODO,
                errorMessage: e.error,
            });
        }
    }
};

export const update = (todo: Todo) => {
    return async (dispatch: Dispatch<TodoActionTypes>) => {
        console.log('UPDATE');
        console.log(todo);
        dispatch({
            type: Keys.REQUEST_UPDATE_TODO
        });
        
        try {
            const data: string | null = localStorage.getItem(mockLocalStorageKey);
        
            if(data === null){
                throw Error('Todo not found.');
            }
            const todos = JSON.parse(data);
            const entry = todos.filter((p: Todo) => (p.id === todo.id))[0];
            console.log(entry);
            
            const model = {
                ...entry,
                title: todo.title
            };
            
            localStorage.setItem(mockLocalStorageKey, JSON.stringify(updateModel(todos, model)));

            setTimeout(() => {  
                
                dispatch({
                    type: Keys.RESPONSE_UPDATE_TODO,
                    model
                });    
            }, mockDelay);
            
        } catch(e) {
            dispatch({
                type: Keys.ERROR_UPDATE_TODO,
                errorMessage: e.error,
            });
        }
    }
};

export const del = (id: string) => {
    return async (dispatch: Dispatch<TodoActionTypes>) => {
        dispatch({
            type: Keys.REQUEST_READ_TODOS
        });
        
        try {
            const data: string | null = localStorage.getItem(mockLocalStorageKey);
        
            if(data === null){
                throw Error('Todo not found.');
            } else {
                const todos = JSON.parse(data);
                localStorage.setItem(mockLocalStorageKey, JSON.stringify(deleteModel(todos, id)));

            }
            setTimeout(() => {  
                
                dispatch({
                    type: Keys.RESPONSE_DELETE_TODO,
                    id
                });    
            }, mockDelay);
            
        } catch(e) {
            dispatch({
                type: Keys.ERROR_DELETE_TODO,
                errorMessage: e.error,
            });
        }
    }
};