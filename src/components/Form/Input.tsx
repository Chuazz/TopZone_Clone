// Framework
import clsx from "clsx";
import { RegisterOptions, useFormContext } from "react-hook-form";
import TextareaAutosize, { TextareaAutosizeProps } from "react-textarea-autosize";

// Style
import styles from "./Form.module.scss";
import { HTMLAttributes, HTMLInputTypeAttribute, useEffect, useState } from "react";
import { ErrorMessage } from "@hookform/error-message";

type InputProps = {
	label?: string;
	tag?: "input" | "textarea";
	defaultValue?: string;
	registerName: string;
	type?: HTMLInputTypeAttribute;
	className?: string;
	inputClassName?: string;
	labelClassName?: string;
	inputAttributes?: HTMLAttributes<HTMLInputElement>;
	registerOptions?: RegisterOptions;
	textareaAutoSizeProps?: TextareaAutosizeProps;
	background?: "white" | "black";
};

const Input = ({
	label,
	tag = "input",
	type = "text",
	registerName,
	registerOptions,
	defaultValue,
	className,
	inputClassName,
	labelClassName,
	inputAttributes,
	background = "black",
	textareaAutoSizeProps,
}: InputProps) => {
	const {
		register,
		watch,
		setValue,
		formState: { errors },
	} = useFormContext();
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
		<div
			className={clsx(styles.inputContainer, className, styles[background], {
				[styles.active]: active,
				[styles.error]: errors[registerName] ? true : false,
			})}
			onClick={() => setActive(true)}
		>
			<div className={clsx("row ali-center")}>
				{tag === "input" ? (
					<input
						id={inputAttributes?.id}
						type={type}
						defaultValue={defaultValue}
						{...inputAttributes}
						{...register(registerName, registerOptions)}
						className={clsx(styles.input, inputClassName)}
						onBlur={(e) => onHanldeBlur(e)}
					/>
				) : (
					<TextareaAutosize
						{...register(registerName, registerOptions)}
						className={clsx(styles.input, inputClassName)}
						minRows={3}
						{...textareaAutoSizeProps}
						onBlur={(e) => onHanldeBlur(e)}
					/>
				)}

				<label
					className={clsx(styles.label, labelClassName, {
						[styles.choice]: type === "checkbox" || type === "radio",
					})}
					htmlFor={inputAttributes?.id}
				>
					{label}
				</label>
			</div>

			<p className={clsx(styles.errorMess)}>
				<ErrorMessage name={registerName} />
			</p>
		</div>
	);
};

export default Input;
