import {
    createStyles, makeStyles, Theme,
} from '@material-ui/core/styles';

type Classes = 'container';
type Props = { };

const styles = makeStyles<Theme, Props, Classes>(
    (theme : Theme) => createStyles<Classes, Props>({
        container: {
            width: '100%',
        },
    }),
);

export default styles;