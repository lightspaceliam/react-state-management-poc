import {
    createStyles, makeStyles, Theme,
} from '@material-ui/core/styles';
type Classes = 'root'
    | 'heading'
    | 'secondaryHeading'
    | 'icon'
    | 'details'
    | 'column'
    | 'helper'
    | 'link';
type Props = { };

const styles = makeStyles<Theme, Props, Classes>(
    (theme: Theme) => createStyles<Classes, Props>({
        root: {
            width: '100%',
            marginTop: theme.spacing(0.8),
            marginBottom: theme.spacing(5),
          },
          heading: {
            fontSize: theme.typography.pxToRem(34),
          },
          secondaryHeading: {
            fontSize: theme.typography.pxToRem(34),
            color: theme.palette.text.secondary,
          },
          icon: {
            verticalAlign: 'bottom',
            height: 20,
            width: 20,
          },
          details: {
            alignItems: 'center',
          },
          column: {
            flexBasis: '33.33%',
          },
          helper: {
            borderLeft: `2px solid ${theme.palette.divider}`,
            padding: theme.spacing(1, 2),
          },
          link: {
            color: theme.palette.primary.main,
            textDecoration: 'none',
            '&:hover': {
              textDecoration: 'underline',
            },
          },
    }),
);

export default styles;