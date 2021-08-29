import { FC } from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';

interface NoRecordsProps {
    colSpan: number;
}

const NoRecords: FC<NoRecordsProps> = ({
    colSpan,
}): JSX.Element => {
    return <TableRow>
        <TableCell
            colSpan={colSpan}
            align='center'
        >
            <Typography variant='body1'>
                No records.
            </Typography>
        </TableCell>
    </TableRow>;
};

export default NoRecords;