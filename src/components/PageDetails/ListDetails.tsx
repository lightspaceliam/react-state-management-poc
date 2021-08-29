import { FC, useState } from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionActions from '@material-ui/core/AccordionActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

import styles from './styles/listDetails';

interface ListDetailProps {
    title: string;
    totalRecords: number;
    path: string;
}

const ListDetail: FC<ListDetailProps> =({
    title,
    totalRecords,
    path,
}): JSX.Element => {
    const classes = styles({});
    const [expanded, setExpanded] = useState<boolean>(true);
    return (
        <div className={classes.root}>
            <Accordion defaultExpanded
                expanded={expanded}
                onChange={() => setExpanded(expanded === false)}
            >
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
                    <Typography variant='body1'>
                        Total records {totalRecords}.
                    </Typography>
                    <Button color='primary' href={path}>
                       New
                   </Button>
                </AccordionActions>
            </Accordion>
        </div>
    );
};

export default ListDetail;