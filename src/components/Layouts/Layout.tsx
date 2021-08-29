import {
    FC,
    ReactNode,
} from 'react';
import Grid from '@material-ui/core/Grid';

import styles from './styles/layout';

interface LayoutProps {
    children: ReactNode;
}

const Layout: FC<LayoutProps> = ({
    children,
}) => {
    const classes = styles({});

    return (
        <div className={classes.main}>
            <Grid container>
                {children}
            </Grid>
        </div>
    );
};

export default Layout;