import {
    FC,
    useContext,
    useEffect,
} from 'react';
import {
    Context as TodoContext,
} from '../contexts/todo/TodoContext';
import { Todo } from '../interfaces/TodoModels';

const TodoList: FC = () : JSX.Element => {
    const {
        state: { todos },
        dispatch
    } = useContext(TodoContext);

    useEffect(() => {
        dispatch({ 
            type: 'READ', 
            payload: [
                { id: new Date(Date.now() + 1).getTime().toString(), title: 'Todo 1', isActive: true },
                { id: new Date(Date.now() + 2).getTime().toString(), title: 'Todo 2', isActive: true },
                { id: new Date(Date.now() + 3).getTime().toString(), title: 'Todo 3', isActive: true },
            ] 
        });
    }, [dispatch]);

    const handleDelete = (id: string) => {
        dispatch({
            type: 'DELETE',
            payload: id
        });
    };

    return (
        <div>
            {!todos.length
                ? <p>No todo items.</p>
                : (
                    <ul>
                        {todos.map((p: Todo) => (
                            <li key={p.id}>
                                {p.title}
                                <button
                                    type='button'
                                    onClick={() => handleDelete(p.id)}>
                                    Del
                                </button>
                            </li>
                        ))}
                    </ul>
                )
            }
        </div>
    );
};

export default TodoList;