import {
    FC,
    useEffect,
    MouseEvent,
} from 'react';
import { connect } from 'react-redux';
import { AppState } from '../../store';
import { read, del } from '../../store/todo/services';
import { TodoInitialState, Todo } from '../../interfaces/TodoModels';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Delete from '@material-ui/icons/Delete';
import NoRecords from '../../components/Utilities/NoRecords';
import Loader from '../../components/Lists/Loader';
import Table from '../../components/Lists/Table';
import IconLink from '../../components/Buttons/OptionLink';
import PageDetails from '../../components/PageDetails/ListDetails';

import styles from './styles/list';
import { Edit } from '@material-ui/icons';
interface TodoListProps {
    requestRead: () => void;
    requestDelete: (id: string) => void;
    todoState: TodoInitialState;
}

const TodoList: FC<TodoListProps> = ({
    requestRead,
    requestDelete,
    todoState,
}): JSX.Element => {
    const classes = styles({});

    const {
        loading,
        errorMessage,
        models,
    } = todoState;

    useEffect(() => {
        requestRead();
    
    }, [requestRead]);

    const handleDelete = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
        event.preventDefault();
        requestDelete(id);
    };

    return (
        <Grid container>
            <PageDetails
                title='Todo List'
                totalRecords={models?.length || 0}
                path='/new'
            />
            <Grid item xs={12}>
                <Loader
                    loading={loading}
                    message={errorMessage}
                    children={
                        <Table
                            ariaLabel='Todo list'
                            body={
                                <>
                                    {!models?.length
                                        ? <NoRecords colSpan={2} />
                                        : models.map((p: Todo) => (
                                            <TableRow key={p.id}>
                                                <TableCell>
                                                    <Typography variant='h6'>
                                                        {p.title}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align='center' width='8%'>
                                                    <span className={classes.options}>
                                                        <IconLink
                                                            ariaLabel='Edit list item'
                                                            icon={<Edit />}
                                                            path={`/`}
                                                            id={p.id}
                                                            handleClick={() => null}
                                                        />

                                                        <IconLink
                                                            ariaLabel='Delete list item'
                                                            icon={<Delete />}
                                                            path={`/`}
                                                            id={p.id}
                                                            colour='secondary'
                                                            handleClick={handleDelete}
                                                        />
                                                    </span>
                                                </TableCell>
                                        </TableRow>
                                    ))}
                                </>
                            }
                        />
                    }
                />
            </Grid>
        </Grid>
    );
};

const mapStateToProps = (state: AppState) => ({
    todoState: state.todoState,
});

const mappDispatchProps = (dispatch: any) => ({
    requestRead: () => dispatch(read()),
    requestDelete: (id: string) => dispatch(del(id)),
});

export default connect(mapStateToProps, mappDispatchProps)(TodoList);