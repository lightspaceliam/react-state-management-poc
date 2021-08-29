import {
    FC,
    ChangeEvent,
} from 'react';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';

export interface InputProps {
    name: string;
    value: string;
    label: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
    errorMessage?: string;
    fullWidth?: boolean;
    type?: string;
}

const Input: FC<InputProps> = ({
    name,
    value,
    label,
    handleChange,
    errorMessage = undefined,
    fullWidth = true,
    type = 'text',
}): JSX.Element => {

    return (
        <FormControl
            error={errorMessage !== undefined}
            fullWidth={fullWidth}
            margin='normal'
        >
            <TextField 
                label={label}
                name={name}
                value={value}
                helperText={errorMessage}
                error={errorMessage !== undefined}
                fullWidth={fullWidth}
                onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event)}
                type={type}
            />
        </FormControl>
    );
};

export default Input;