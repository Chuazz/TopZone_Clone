// Framework
import { FaChevronRight } from 'react-icons/fa';
import { PropsWithChildren } from 'react';

// Component
import { Button } from '@components/Button';

type NextArrowProps = PropsWithChildren<{
	className?: string;
	style?: React.CSSProperties;
	right?: string;
	onClick?: Function;
}>;

const NextArrow = ({ className, style, right, onClick = () => {} }: NextArrowProps) => {
	return (
		<div className={className} style={{ ...style, right: right }} onClick={() => onClick()}>
			<Button size={50}>
				<FaChevronRight />
			</Button>
		</div>
	);
};

export default NextArrow;
