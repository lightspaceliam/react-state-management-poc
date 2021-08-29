import { FC } from 'react';
import Button from '@material-ui/core/Button';

export type types = 'submit' | 'button';

interface PrimaryButtonProps {
    text: string;
    type?: types;
    disabled?: boolean;
    fullWidth?: boolean;
}
const PrimaryButton:FC<PrimaryButtonProps> = ({
    text,
    type = 'submit',
    disabled = false,
    fullWidth = false,
}):JSX.Element => {

    return (
        <Button
            type={type}
            variant='contained'
            color='primary'
            disabled={disabled}
            fullWidth={fullWidth}
        >
            {text}
        </Button>
    );
};

export default PrimaryButton;