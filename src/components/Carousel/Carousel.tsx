// Framework
import Slider from 'react-slick';
import clsx from 'clsx';

// Component
import { Image } from '@components/Image';
import { NextArrow, PrevArrow } from '@components/SlickArrow';

// Image
import * as Home from '@assets/image/Banner/Home';

// Style
import styles from './Carousel.module.scss';

type BannerProps = {
	banners?: string[];
	borderRadius?: string;
	customPaging?: boolean;
	arrowPos?: string;
};

const Carousel = ({
	banners = [Home.b1, Home.b2, Home.b3, Home.b4],
	borderRadius = '0',
	customPaging = false,
	arrowPos = '20px',
}: BannerProps) => {
	const settings: any = {
		autoplay: true,
		dots: true,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		dotsClass: clsx('slick-dots', { [styles.dots]: customPaging }),
		prevArrow: <PrevArrow left={arrowPos} />,
		nextArrow: <NextArrow right={arrowPos} />,
	};

	if (customPaging) {
		settings['customPaging'] = (i: number) => {
			return (
				<a className={clsx(styles.page)}>
					<Image size={70} src={banners[i]} />
				</a>
			);
		};
	}

	return (
		<div className={clsx(styles.container, 'p-b-24')}>
			<Slider {...settings}>
				{banners.map((banner, i) => (
					<div key={i}>
						<Image
							style={{ borderRadius: borderRadius }}
							className={clsx(styles.img)}
							src={banner}
							size={'100%'}
						/>
					</div>
				))}
			</Slider>
		</div>
	);
};

export default Carousel;
