// Framework
import clsx from 'clsx';

// Style
import styles from './Icon.module.scss';

type IconProps = {
	color?: string;
	className?: string;
	size?: number;
	onClick?: Function;
	Element: () => JSX.Element;
};

const Icon = ({ color = '#dddbdb', className, size = 20, Element, onClick = () => {} }: IconProps) => {
	return (
		<div
			className={clsx(styles.container, className, 'row ali-center')}
			style={{ color: color, width: size, height: size }}
			onClick={() => onClick()}
		>
			<Element />
		</div>
	);
};

export default Icon;
