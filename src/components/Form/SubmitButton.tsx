import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import styles from './Form.module.scss';

type SubmitButtonProps = {
	text?: string;
	className?: string;
};

const SubmitButton = ({ className, text }: SubmitButtonProps) => {
	return <button className={clsx(className, styles.button)}>{text}</button>;
};

export default SubmitButton;
