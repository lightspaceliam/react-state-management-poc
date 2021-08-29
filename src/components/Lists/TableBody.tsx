import { FC, ReactNode } from 'react';
import { TableBody as MuiTableBody } from '@material-ui/core';

import styles from './styles/tableBody';

interface TableBodyProps {
    children: ReactNode;
}

const TableBody: FC<TableBodyProps> = ({
    children,
}): JSX.Element => {
    const classes = styles({});

    return (
        <MuiTableBody className={classes.tbody}>
            {children}
        </MuiTableBody>
    );
};

export default TableBody;