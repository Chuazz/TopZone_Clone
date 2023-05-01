// Framework
import { HiChevronLeft } from 'react-icons/hi';

// Component
import { Button } from '@components/Button';
import { PropsWithChildren } from 'react';
import { Icon } from '@components/Icon';

type PrevArrowProps = PropsWithChildren<{
	className?: string;
	style?: React.CSSProperties;
	left?: string;
	onClick?: Function;
}>;

const PrevArrow = ({ className, style, left, onClick = () => {} }: PrevArrowProps) => {
	return (
		<div className={className} style={{ ...style, left: left }} onClick={() => onClick()}>
			<Button size={50}>
				<Icon size={28} Element={HiChevronLeft} />
			</Button>
		</div>
	);
};

export default PrevArrow;
