// Framework
import { HiChevronLeft } from 'react-icons/hi';

// Component
import { Button } from '@components/util/Button';
import { Icon } from '@components/util/Icon';

type PrevArrowProps = {
	className?: string;
	style?: React.CSSProperties;
	left?: string;
	onClick?: Function;
};

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
