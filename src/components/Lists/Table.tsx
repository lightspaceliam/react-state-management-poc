import { FC, ReactNode } from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import { Table as MuiTable } from '@material-ui/core';
import TableBody from './TableBody';

interface TableProps {
    ariaLabel: string;
    body: ReactNode;
}
const Table: FC<TableProps> = ({
    ariaLabel,
    body,
}) => {

    return (
        <TableContainer>
            <MuiTable
                stickyHeader
                aria-label={ariaLabel}
                style={{
                    borderCollapse: 'separate',
                    borderSpacing: '0 5px',
                }}
            >
                <TableBody>{body}</TableBody>
            </MuiTable>
        </TableContainer>
    );
}

export default Table;