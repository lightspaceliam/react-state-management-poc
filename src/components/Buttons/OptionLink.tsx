import { FC, ReactNode, MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';

export type colours = 'default' | 'inherit' | 'primary' | 'secondary';

interface IconLinkProps {
    ariaLabel: string;
    icon: ReactNode;
    path: string;
    id: string;
    handleClick: (event: MouseEvent<HTMLAnchorElement>, id: string) => void;
    colour?: colours;
    disabled?: boolean;
}

const IconLink:FC<IconLinkProps> = ({
    ariaLabel,
    icon,
    path,
    id,
    handleClick,
    colour = 'primary',
    disabled = false,
}):JSX.Element => {
    const Svg = icon;
    return (
        <Link
            to={`${path}${id}`}
            onClick={(event: MouseEvent<HTMLAnchorElement>) => handleClick(event, id)}
        >
            <IconButton aria-label={ariaLabel}
                disabled={disabled}
                color={colour}
            >
                {Svg}
            </IconButton>
        </Link>
    );
};

export default IconLink;