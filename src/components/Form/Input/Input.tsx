// Framework
import clsx from 'clsx';
import { RegisterOptions, useFormContext } from 'react-hook-form';
import TextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize';

// Style
import styles from './Input.module.scss';
import { HTMLAttributes, HTMLInputTypeAttribute, useEffect, useState } from 'react';
import { ErrorMessage } from '@hookform/error-message';

type InputProps = {
	label?: string;
	tag?: 'input' | 'textarea';
	defaultValue?: string;
	registerName: string;
	type?: HTMLInputTypeAttribute;
	className?: string;
	inputClassName?: string;
	labelClassName?: string;
	inputAttributes?: HTMLAttributes<HTMLInputElement>;
	registerOptions?: RegisterOptions;
	textareaAutoSizeProps?: TextareaAutosizeProps;
};

const Input = ({
	label,
	tag = 'input',
	type = 'text',
	registerName,
	registerOptions,
	defaultValue,
	className,
	inputClassName,
	labelClassName,
	inputAttributes,
	textareaAutoSizeProps,
}: InputProps) => {
	const { register, watch, setValue } = useFormContext();
	const [active, setActive] = useState(watch(registerName) ? true : false);

	const onHanldeBlur = (e: React.FocusEvent) => {
		let element = e.target as HTMLInputElement;

		if (!element.value) {
			setActive(false);
		}
	};

	useEffect(() => {
		setValue(registerName, defaultValue);
	}, []);

	return (
		<div className={clsx(styles.container, className, { [styles.active]: active })}>
			<p className={clsx(styles.label, labelClassName)}>{label}</p>

			{tag === 'input' ? (
				<input
					type={type}
					defaultValue={defaultValue}
					{...inputAttributes}
					{...register(registerName, registerOptions)}
					className={clsx(styles.input, inputClassName)}
					onClick={() => setActive(true)}
					onBlur={(e) => onHanldeBlur(e)}
				/>
			) : (
				<TextareaAutosize
					{...register(registerName, registerOptions)}
					className={clsx(styles.input, inputClassName)}
					minRows={3}
					{...textareaAutoSizeProps}
					onClick={() => setActive(true)}
					onBlur={(e) => onHanldeBlur(e)}
				/>
			)}
			<p className={clsx(styles.errorMess)}>
				<ErrorMessage name={registerName} />
			</p>
		</div>
	);
};

export default Input;
