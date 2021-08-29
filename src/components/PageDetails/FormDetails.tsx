import { FC } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import IconButtonLink from '../Buttons/IconButtonLink';
import NavigateBeforeTwoTone from '@material-ui/icons/NavigateBeforeTwoTone';

import styles from './styles/listDetails';

interface FormDetailProps {
    title: string;
    cancelPath: string;
}

const FormDetail: FC<FormDetailProps> =({
    title,
    cancelPath,
}): JSX.Element => {
    const classes = styles({});
    return (
        <div className={classes.root}>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1c-content"
                    id="panel1c-header"
                >
                    <div className={classes.column}>
                        <Typography variant='h3' className={classes.heading}>
                            {title}
                        </Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails className={classes.details}>
                
                </AccordionDetails>
                <Divider />
                <AccordionActions>
                    <IconButtonLink
                        text='Back'
                        href={cancelPath}
                        startIcon={<NavigateBeforeTwoTone />}
                    />
                </AccordionActions>
            </Accordion>
        </div>
    );
};

export default FormDetail;