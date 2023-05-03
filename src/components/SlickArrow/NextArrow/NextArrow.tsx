// Framework
import { HiChevronRight } from 'react-icons/hi';

// Component
import { Button } from '@components/Form/Button';
import { Icon } from '@components/util/Icon';

type NextArrowProps = {
	className?: string;
	style?: React.CSSProperties;
	right?: string;
	onClick?: Function;
};

const NextArrow = ({ className, style, right, onClick = () => {} }: NextArrowProps) => {
	return (
		<div className={className} style={{ ...style, right: right }} onClick={() => onClick()}>
			<Button size={50}>
				<Icon size={28} Element={HiChevronRight} />
			</Button>
		</div>
	);
};

export default NextArrow;
