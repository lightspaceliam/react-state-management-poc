import {
    FC,
    useState,
    ChangeEvent,
    FormEvent,
    useEffect,
} from 'react';
import { match } from 'react-router-dom';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { create, edit, update } from '../../store/todo/services';
import { useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import FormDetails from '../../components/PageDetails/FormDetails';
import Form from '../../components/FormControls/Form';
import Input from '../../components/FormControls/Input';
import FormSubmitOptions from '../../components/FormControls/FormSubmitOptions';
import { Todo, TodoInitialState } from '../../interfaces/TodoModels';
import Message, { MessageTypes } from '../../components/Utilities/Message';
import { initialState } from '../../store/todo/reducer';

interface TodoFormParams {
    id: string;
}

interface TodoFormProps {
    match?: match<TodoFormParams>;
    todoState: TodoInitialState,
    requestCreate: (model: Todo) => void;
    requestEdit: (id: string) => void;
    requestUpdate: (model: Todo) => void;
}

const TodoForm: FC<TodoFormProps> = ({
    match,
    todoState,
    requestCreate,
    requestEdit,
    requestUpdate,
}): JSX.Element => {
    const [todo, setTodo] = useState<Todo>(initialState.model);
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);
    const history = useHistory();
    
    const {
        // loading,
        model,
    } = todoState;

    /**
     * If the form is in edit mode, request Todo by id.
     */
    useEffect(() => {
        const id: string | undefined = match?.params.id;
        
        if(id !== undefined){
            requestEdit(id);
        }
    }, [match, requestEdit]);

    /**
     * Set the Todo, if in edit mode.
     */
    useEffect(() => {
        if(model.id !== ''){
            setTodo(model);
        }
    }, [model]);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTodo({
            ...todo,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        event.preventDefault();

        if(todo.title.length === 0){
            setErrorMessage('Title is required.');
            return;
        }
        if(model.id === ''){
            requestCreate({ id: new Date().getTime().toString(), title: model.title });
        } else {
            requestUpdate(todo);
        }
        
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
                    value={todo.title}
                    label='Title'
                    handleChange={handleInputChange}
                />

                <FormSubmitOptions
                    cancelPath={`/`}
                />
            </Form>
        </Grid>
    );
};

const mapStateToProps = (state: AppState) => ({
    todoState: state.todoState,
});

const mappDispatchProps = (dispatch: any) => ({
    requestCreate: (model: Todo) => dispatch(create(model)),
    requestEdit: (id: string) => dispatch(edit(id)),
    requestUpdate: (model: Todo) => dispatch(update(model)),
});

export default connect(mapStateToProps, mappDispatchProps)(TodoForm);