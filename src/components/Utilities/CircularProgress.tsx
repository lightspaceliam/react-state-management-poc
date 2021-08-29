import { FC } from 'react';
import { CircularProgress as CircularProgressMui } from '@material-ui/core';
import styles from './styles/circularProgress';

const CircularProgress: FC = () => {
    const classes = styles({});
    
    return (
		<div className={classes.root}>
			<CircularProgressMui />
		</div>
	);
};

export default CircularProgress;