import {
    FC,
    FormEvent,
    ReactNode,
} from 'react';

import styles from './styles/form';

interface FormProps {
    onSubmit: (event: FormEvent<HTMLFormElement>) => void;
    children: ReactNode;
}

const Form:FC<FormProps> = ({
    onSubmit,
    children
}):JSX.Element => {
    const classes = styles({});

    return (
        <form
            onSubmit={onSubmit}
            className={classes.container}
        >
            {children}
        </form>
    );
};

export default Form;