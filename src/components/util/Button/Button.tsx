// Framework
import React, { PropsWithChildren, forwardRef } from 'react';
import clsx from 'clsx';

// Style
import styles from './Button.module.scss';

type ButtonProps = PropsWithChildren<{
	className?: string;
	shape?: string;
	size?: number | string;
	leftIcon?: JSX.Element;
	leftClass?: string;
	rightIcon?: JSX.Element;
	rightClass?: string;
	style?: React.CSSProperties;
	center?: boolean;
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
			center,
			onClick = () => {},
		},
		ref,
	) => {
		return (
			<div
				ref={ref}
				onClick={(e) => onClick(e)}
				className={clsx(styles.container, 'row ali-center', className, {
					[styles.circle]: shape === 'circle',
					['jus-center']: center,
				})}
				style={{ width: size, height: size, ...style }}
			>
				{leftIcon && <div className={clsx(styles.icon, styles.left, leftClass)}>{leftIcon}</div>}

				<div className={clsx(styles.label)}>{children}</div>

				{rightIcon && <div className={clsx(styles.icon, styles.right, rightClass)}>{rightIcon}</div>}
			</div>
		);
	},
);

export default Button;
