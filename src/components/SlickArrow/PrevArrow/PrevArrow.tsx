// Framework
import { FaChevronLeft } from 'react-icons/fa';

// Component
import { Button } from '@components/Button';
import { PropsWithChildren } from 'react';

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
				<FaChevronLeft />
			</Button>
		</div>
	);
};

export default PrevArrow;
