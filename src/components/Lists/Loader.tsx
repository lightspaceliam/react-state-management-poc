import {
    FC,
    ReactNode,
} from 'react';
import Message, { MessageTypes } from '../Utilities/Message';
import CircularProgress from '../Utilities/CircularProgress';

interface LoaderProps {
    loading: boolean;
    message?: string | undefined;
    children: ReactNode;
}

const Loader: FC<LoaderProps> = ({
    loading,
    message,
    children
}): JSX.Element => {
    if (loading === false && message !== undefined) {
		return <Message messageType={MessageTypes.Error} message={message} />
	}
	else if (loading === false && message === undefined) {
		return (
			<>
				{children}
			</>
		);
	}
	else {
		return <CircularProgress />
	}
};

export default Loader;