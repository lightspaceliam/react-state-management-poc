import {
    FC,
    useState,
    useContext,
    useEffect,
    MouseEvent,
} from 'react';
import { Context as TodoContext } from '../../Contexts/todos/TodoContext';
import { Todo } from '../../interfaces/TodoModels';
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
import { mockLocalStorageKey, mockDelay } from '../../common/Constants';

import styles from './styles/list';

const TodoList: FC = (): JSX.Element => {
    const classes = styles({});
    const [loading, setLoading] = useState<boolean>(false);

    const {
        state: { todos },
        dispatch,
    } = useContext(TodoContext);

    useEffect(() => {
        const data: string | null = localStorage.getItem(mockLocalStorageKey);
        if(data !== null){
            const items = JSON.parse(data as string) as Array<Todo>;

            setLoading(true);
            setTimeout(() => {  
                dispatch({
                    type: 'READ',
                    payload: items
                });
                setLoading(false);
            }, mockDelay);
        }
        
    }, [dispatch]);

    const handleDelete = (event: MouseEvent<HTMLAnchorElement>, id: string) => {
        event.preventDefault();
        dispatch({
            type: 'DELETE',
            payload: id
        });
    };

    return (
        <Grid container>
            <PageDetails
                title='Todo List'
                totalRecords={todos.length}
                path='/new'
            />
            <Grid item xs={12}>
                <Loader
                    loading={loading}
                    message={undefined}
                    children={
                        <Table
                            ariaLabel='Todo list'
                            body={
                                <>
                                    {!todos.length
                                        ? <NoRecords colSpan={2} />
                                        : todos.map((p: Todo) => (
                                            <TableRow key={p.id}>
                                                <TableCell>
                                                    <Typography variant='h6'>
                                                        {p.title}
                                                    </Typography>
                                                </TableCell>
                                                <TableCell align='center' width='8%'>
                                                    <span className={classes.options}>
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

export default TodoList;