import { FC } from 'react';
import classNames from 'classnames';

import IconButton from '@material-ui/core/IconButton';
import SnackbarContent from '@material-ui/core/SnackbarContent';
import {
	CheckCircle,
	Error,
	Info,
	Warning,
} from '@material-ui/icons';
import styles from './styles/message';

export enum MessageTypes {
	Success,
	Error,
	Info,
	Warning
};

interface MessageProps {
	message: string | undefined;
	messageType: MessageTypes
}

const variantIcons: any = {
	success: CheckCircle,
	warning: Warning,
	error: Error,
	info: Info
};

const Message: FC<MessageProps> = ({
    message = undefined,
    messageType,
}): JSX.Element => {
    const classes = styles({});
	
    let messageTypeClass = classes.error;
	const messageIdentifier = (MessageTypes[messageType]).toLowerCase();

	const Icon = variantIcons[messageIdentifier];

	switch (messageType) {
		case MessageTypes.Error:
			messageTypeClass = classes.error;
			break;
		case MessageTypes.Success:
			messageTypeClass = classes.success;
			break;
		case MessageTypes.Info:
			messageTypeClass = classes.info;
			break;
		case MessageTypes.Warning:
			messageTypeClass = classes.warning;
			break;
    }

    return (
		<SnackbarContent className={messageTypeClass}
			aria-describedby='client-snackbar'
			message={
				<span className={classes.message}>
					<Icon className={classNames(classes.icon, classes.iconVariant)} />
					{message}
				</span>
			}
			action={[
				<IconButton
					key="close"
					aria-label="close"
					color="inherit"
				>
				</IconButton>,
			]} />
	);
};

export default Message;