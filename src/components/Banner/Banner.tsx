// Framework
import Slider from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Component
import { Image } from '@components/Image';
import { Button } from '@components/Button';

// Image
import * as Home from '@assets/image/Banner/Home';

function NextArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<Button size={50}>
				<FaChevronRight />
			</Button>
		</div>
	);
}

function PrevArrow(props: any) {
	const { className, style, onClick } = props;
	return (
		<div className={className} style={{ ...style }} onClick={onClick}>
			<Button size={50}>
				<FaChevronLeft />
			</Button>
		</div>
	);
}

const Banner = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		nextArrow: <NextArrow />,
		prevArrow: <PrevArrow />,
	};

	return (
		<div className="p-b-24">
			<Slider {...settings}>
				<div>
					<Image src={Home.b1} size={'100%'} />
				</div>
				<div>
					<Image src={Home.b2} size={'100%'} />
				</div>
				<div>
					<Image src={Home.b3} size={'100%'} />
				</div>
				<div>
					<Image src={Home.b4} size={'100%'} />
				</div>
			</Slider>
		</div>
	);
};

export default Banner;
