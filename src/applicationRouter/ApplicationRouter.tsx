import { FC } from 'react';
import {
    Router,
    Route,
    Switch,
} from 'react-router-dom';
import * as createHistory from 'history';

import Layout from '../components/Layouts/Layout';
import TodoList from '../pages/Todo/List';

import { Provider as TodoContext } from '../Contexts/todos/TodoContext';
import TodoForm from '../pages/Todo/Form';

export const history = createHistory.createBrowserHistory();

const ApplicationRouter: FC = (): JSX.Element => {
    return (
        <Router history={history}>
            <Layout>
            <TodoContext>
                <Switch>
                    <Route
                        path='/'
                        exact={true}
                        component={TodoList}
                    />
                    <Route
                        path='/new'
                        exact={true}
                        component={TodoForm}
                    />
                </Switch>
                </TodoContext>
            </Layout>
        </Router>
    );
}

export default ApplicationRouter;