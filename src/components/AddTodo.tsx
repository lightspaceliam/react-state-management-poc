import {
    FC,
    FormEvent,
    useContext,
    useState,
    ChangeEvent
} from 'react';
import { Context as TodoContext } from '../contexts/todo/TodoContext';

const AddTodo: FC = () => {
    const [title, setTitle] = useState<string>('');

    const {
        dispatch
    } = useContext(TodoContext);

    const submitHandler = (event: FormEvent) => {
        event.preventDefault();

        if(title.length === 0){
            alert('Title is required.');
            return;
        }

        dispatch({
            type: 'ADD',
            payload: { id: new Date().getTime().toString(), title: title, isActive: true }
        });
        setTitle('');
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    return (
        <form onSubmit={submitHandler}>
            <input
                type='text'
                name='title'
                value={title}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)}
            />
            <button
                type='submit'
            >
                Submit
            </button>
        </form>
    );
};

export default AddTodo;