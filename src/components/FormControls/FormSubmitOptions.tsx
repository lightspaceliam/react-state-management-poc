import { FC } from 'react';
import PrimaryButton from '../Buttons/PrimaryButton';
import CardActions from '@material-ui/core/CardActions';
import { NavigateBeforeTwoTone } from '@material-ui/icons';
import IconButtonLink from '../Buttons/IconButtonLink';

import styles from './styles/formSubmitOptions';

interface FormSubmitOptionsProps {
    cancelPath: string;
}

const FormSubmitOptions: FC<FormSubmitOptionsProps> = ({
    cancelPath,
}): JSX.Element => {
    const classes = styles({});

    return (
        <CardActions
            classes={{ spacing: classes.container}}
        >
            <IconButtonLink
                text='Cancel'
                href={cancelPath}
                startIcon={<NavigateBeforeTwoTone />}
            />
        
            <PrimaryButton
                type='submit'
                text='Save'
            />
        </CardActions>
    );
};

export default FormSubmitOptions;