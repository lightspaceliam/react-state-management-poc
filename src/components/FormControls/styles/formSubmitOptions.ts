import {
    createStyles, makeStyles, Theme,
} from '@material-ui/core/styles';
import { primaryWhite } from '../../../common/Constants';
import { dropShadow } from '../../../styles/styles';

type Classes = 'container';
type Props = { };

const styles = makeStyles<Theme, Props, Classes>(
    (theme : Theme) => createStyles<Classes, Props>({
        container: {
            margin: theme.spacing(2,0),
            padding: theme.spacing(2,1),
            justifyContent: 'space-between',
            backgroundColor: primaryWhite,
            borderRadius: '4px',
            ...dropShadow,
        },
    }),
);

export default styles;