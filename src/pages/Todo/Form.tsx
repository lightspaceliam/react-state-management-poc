import {
    FC,
    useState,
    ChangeEvent,
    FormEvent,
    useContext,
} from 'react';
import { useHistory } from 'react-router-dom';
import { Context as TodoContext } from '../../Contexts/todos/TodoContext';
import Grid from '@material-ui/core/Grid';
import FormDetails from '../../components/PageDetails/FormDetails';
import Form from '../../components/FormControls/Form';
import Input from '../../components/FormControls/Input';
import FormSubmitOptions from '../../components/FormControls/FormSubmitOptions';
import { mockLocalStorageKey } from '../../common/Constants';
import { Todo } from '../../interfaces/TodoModels';
import { createModel } from '../../helpers/dataResponse';
import Message, { MessageTypes } from '../../components/Utilities/Message';

const TodoForm: FC = (): JSX.Element => {
    const [title, setTitle] = useState<string>('');
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
    const history = useHistory();
    const {
        dispatch
    } = useContext(TodoContext);

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value);
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if(title.length === 0){
            setErrorMessage('Title is required.');
            return;
        }
        
        const data: string | null = localStorage.getItem(mockLocalStorageKey);

        const todos = JSON.parse(data as string) as Array<Todo>;
        const todo: Todo = { id: new Date().getTime().toString(), title: title }
        
        localStorage.setItem(mockLocalStorageKey, JSON.stringify(createModel(todos, todo)));

        dispatch({
            type: 'ADD',
            payload: todo
        });
        history.push(`/`);
    };

    return (
        <Grid container>
            <FormDetails
                title='New Todo'
                cancelPath='/'
            />
            <Form
                onSubmit={handleSubmit}
            >
                {errorMessage !== undefined &&
                    <Message
                        messageType={MessageTypes.Error}
                        message={errorMessage}
                    />
                }
                <Input
                    name='title'
                    value={title}
                    label='Title'
                    handleChange={handleInput}
                />

                <FormSubmitOptions
                    cancelPath={`/`}
                />
            </Form>
        </Grid>
    );
};

export default TodoForm;