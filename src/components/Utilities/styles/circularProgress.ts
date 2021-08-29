import {
    createStyles, makeStyles, Theme,
} from '@material-ui/core/styles';

type Classes = 'root';
type Props = { };

const styles = makeStyles<Theme, Props, Classes>(
    (theme: Theme) => createStyles<Classes, Props>({
        root: {
			display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '50px 0',
            '& > * + *': {
                marginLeft: theme.spacing(2),
            },
        },
    }),
);

export default styles;