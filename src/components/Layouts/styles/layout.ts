import {
    createStyles, makeStyles, Theme,
} from '@material-ui/core/styles';

type Classes = 'main';
type Props = { };

const styles = makeStyles<Theme, Props, Classes>(
    () => createStyles<Classes, Props>({
        main: {
            marginTop: '64px',
            width: 'calc(80% - 80px)',
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    }),
);

export default styles;