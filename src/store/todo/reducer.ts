import {
    TodoActionKeys as Keys,
    TodoActionTypes,
} from './actionTypes';
import { TodoInitialState } from '../../interfaces/TodoModels';
import {
    createModel,
    updateModel,
    deleteModel,
} from '../../helpers/dataResponse';

export const initialState: TodoInitialState = {
    loading: false,
    errorMessage: undefined,
    models: [],
    model: { id: '', title: '' },
};

export const todoReducer = (
    state: TodoInitialState,
    action: TodoActionTypes
): TodoInitialState => {

    switch(action.type){
        case Keys.REQUEST_CREATE_TODO:
            return {
                ...state,
                errorMessage: undefined,
                loading: true,
            };
        case Keys.RESPONSE_CREATE_TODO:
            return {
                ...state,
                loading: false,
                models: createModel([...state.models], action.model),
            };
        case Keys.ERROR_CREATE_TODO:
            return {
                ...state,
                loading: false,
                errorMessage: action.errorMessage,
            };

        case Keys.REQUEST_READ_TODOS:
            return {
                ...state,
                errorMessage: undefined,
                loading: true,
            };
        case Keys.RESPONSE_READ_TODOS:
            return {
                ...state,
                loading: false,
                models: action.models,
            };
        case Keys.ERROR_READ_TODOS:
            return {
                ...state,
                loading: false,
                errorMessage: action.errorMessage,
            };

        case Keys.REQUEST_EDIT_TODO:
            return {
                ...state,
                errorMessage: undefined,
                loading: true,
            };
        case Keys.RESPONSE_EDIT_TODO:
            return {
                ...state,
                loading: false,
                model: action.model,
            };
        case Keys.ERROR_EDIT_TODO:
            return {
                ...state,
                loading: false,
                errorMessage: action.errorMessage,
            };
        
        case Keys.REQUEST_UPDATE_TODO:
            return {
                ...state,
                errorMessage: undefined,
                loading: true,
            };
        case Keys.RESPONSE_UPDATE_TODO:
            return {
                ...state,
                loading: false,
                models: updateModel([...state.models], action.model),
            };
        case Keys.ERROR_UPDATE_TODO:
            return {
                ...state,
                loading: false,
                errorMessage: action.errorMessage,
            };

        case Keys.REQUEST_DELETE_TODO:
            return {
                ...state,
                errorMessage: undefined,
                loading: true,
            };
        case Keys.RESPONSE_DELETE_TODO:
            return {
                ...state,
                loading: false,
                models: deleteModel([ ...state.models ], action.id),
            };
        case Keys.ERROR_DELETE_TODO:
            return {
                ...state,
                loading: false,
                errorMessage: action.errorMessage,
            };
        default:
            return initialState;
    }
};
