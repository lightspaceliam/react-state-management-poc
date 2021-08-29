import {
    createStyles, makeStyles, Theme,
} from '@material-ui/core/styles';
import { primaryWhite } from '../../../common/Constants';

type Classes = 'tbody';
type Props = { };

const styles = makeStyles<Theme, Props, Classes>(
    (theme: Theme) => createStyles<Classes, Props>({
        tbody: {
            '& tr': {
                '& td:first-child': {
                    borderRadius: '10px 0 0 10px',
                },
                '& td:nth-last-child(2)': {
                    borderRight: '1px solid #666666',
                },
                '& td:last-child': {
                    borderRadius: '0 10px 10px 0',
                },
                '& td': {
                    paddingBottom: '5px',
                    backgroundColor: primaryWhite,
                },
            },            
        },
    }),
);

export default styles;