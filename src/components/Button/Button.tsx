// Framework
import React, { PropsWithChildren, forwardRef } from 'react';
import clsx from 'clsx';

// Style
import styles from './Button.module.scss';

type ButtonProps = PropsWithChildren<{
	className?: string;
	shape?: string;
	size?: number;
	leftIcon?: JSX.Element;
	leftClass?: string;
	rightIcon?: JSX.Element;
	rightClass?: string;
	style?: object;
	onClick?: Function;
}>;

export type Ref = HTMLDivElement;

const Button = forwardRef<Ref, ButtonProps>(
	(
		{
			className,
			shape = 'circle',
			size = 40,
			leftIcon,
			leftClass,
			rightIcon,
			rightClass,
			children,
			style,
			onClick = () => {},
			...props
		},
		ref,
	) => {
		return (
			<div
				ref={ref}
				onClick={(e) => onClick(e)}
				className={clsx(styles.container, 'row ali-center', className, { [styles.circle]: shape === 'circle' })}
				style={{ width: size, height: size, ...style }}
				{...props}
			>
				<div className={clsx(styles.icon, styles.left, leftClass)}>{leftIcon}</div>

				{children}

				<div className={clsx(styles.icon, styles.right, rightClass)}>{rightIcon}</div>
			</div>
		);
	},
);

export default Button;
