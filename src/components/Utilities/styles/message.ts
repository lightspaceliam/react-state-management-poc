import { CSSProperties } from 'react';
import {
    createStyles, makeStyles, Theme,
} from '@material-ui/core/styles';
import { amber, green } from '@material-ui/core/colors';

type Classes = 'success'
    | 'error'
    | 'info'
    | 'warning'
    | 'icon'
    | 'iconVariant'
    | 'message';
type Props = { };

const styles = makeStyles<Theme, Props, Classes>(
    (theme: Theme) => createStyles<Classes, Props>({
        success: {
            backgroundColor: green[600],
        },
        error: {
            backgroundColor: theme.palette.error.dark,
        },
    
        info: {
            backgroundColor: theme.palette.primary.main,
        },
        warning: {
            backgroundColor: amber[700],
        },
        icon: {
            fontSize: 20,
        },
        iconVariant: {
            opacity: 0.9,
            marginRight: theme.spacing(1),
        },
        message: {
            display: 'flex',
            alignItems: 'center' as CSSProperties['textAlign'],
        },
    }),
);

export default styles;