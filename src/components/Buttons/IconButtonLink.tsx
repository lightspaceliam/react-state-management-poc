import { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';

// import styles from './styles/iconButtonLink';

interface IconButtonProps {
    text: string;
    href: string;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
}

const IconButtonLink: FC<IconButtonProps> = ({
    text,
    href,
    startIcon,
    endIcon,
}): JSX.Element => {
    // const classes = styles({});
    
    return (
        <Button
            startIcon={startIcon || undefined}
            endIcon={endIcon || undefined}
        >
            <Link
                to={href}
            >
                {text}
            </Link>
        </Button>
    );
};

export default IconButtonLink;