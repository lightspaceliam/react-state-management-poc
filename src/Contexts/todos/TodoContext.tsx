import {
    FC,
    useReducer,
    createContext,
} from 'react';
import {
    TodoActionTypes,
    InitialTodoState,
    ContextModel,
    Todo,
} from '../../interfaces/TodoModels';
import { todos } from '../../mockData/mockTodos';

export const defaultState: InitialTodoState = {
    todos: todos
};

const reducer = (
    state: InitialTodoState,
    action: TodoActionTypes,
) : InitialTodoState => {

    switch(action.type){
        case 'ADD':
            return {
                ...state,
                todos: [ ...state.todos, action.payload ]
            };
        case 'READ':
            return {
                ...state,
                todos: action.payload,
            }
        case 'DELETE':
            return {
                ...state,
                todos: state.todos.filter((p: Todo) => p.id !== action.payload),
            };
        default:
            return defaultState;
    }
};

export const Context = createContext({} as ContextModel);

export const Provider: FC = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, defaultState);
    
    return (
        <Context.Provider value={{ state, dispatch }}>
            {children}
        </Context.Provider>
    );
};
