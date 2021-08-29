import {
    FC,
    useReducer,
    createContext,
} from 'react';
import {
    TodoActionTypes,
    TodoInitialState,
    ContextModel,
    Todo,
} from '../../interfaces/TodoModels';

const defaultState: TodoInitialState = {
    todos: []
};

const reducer = (
    state: TodoInitialState,
    action: TodoActionTypes,
) : TodoInitialState => {

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
            return state;
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
