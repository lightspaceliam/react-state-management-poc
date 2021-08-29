import { FC } from 'react';
import {
    Router,
    Route,
    Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import * as createHistory from 'history';
import configureStore from '../store';

import Layout from '../components/Layouts/Layout';

import TodoList from '../pages/Todo/List';
import TodoForm from '../pages/Todo/Form';

export const history = createHistory.createBrowserHistory();
const store = configureStore();

const ApplicationRouter: FC = (): JSX.Element => {
    return (
        <Provider store={store}>
            <Router history={history}>
                <Layout>
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
                        <Route
                            path='/:id'
                            exact={true}
                            component={TodoForm}
                        />
                    </Switch>
                </Layout>
            </Router>
        </Provider>
    );
}

export default ApplicationRouter;