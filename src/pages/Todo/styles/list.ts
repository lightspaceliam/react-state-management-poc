import {
    createStyles, makeStyles, Theme,
} from '@material-ui/core/styles';

type Classes = 'options';

type Props = { };

const styles = makeStyles<Theme, Props, Classes>(
    (theme : Theme) => createStyles<Classes, Props>({
        options: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        },
    }),
);

export default styles;