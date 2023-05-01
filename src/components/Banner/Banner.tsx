// Framework
import Slider from 'react-slick';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

// Component
import { Image } from '@components/Image';
import { NextArrow, PrevArrow } from '@components/SlickArrow';

// Image
import * as Home from '@assets/image/Banner/Home';

// Style
import styles from './Banner.module.scss';

type BannerProps = PropsWithChildren<{
	banners?: string[];
	borderRadius?: string;
}>;

const Banner = ({ banners = [], borderRadius = '0' }: BannerProps) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: <PrevArrow left="20px" />,
		nextArrow: <NextArrow right="20px" />,
	};

	return (
		<div className="p-b-24">
			<div>
				{banners.length === 0 ? (
					<Slider {...settings}>
						<div>
							<Image
								style={{ borderRadius: borderRadius }}
								className={clsx(styles.img)}
								src={Home.b1}
								size={'100%'}
							/>
						</div>
						<div>
							<Image
								style={{ borderRadius: borderRadius }}
								className={clsx(styles.img)}
								src={Home.b2}
								size={'100%'}
							/>
						</div>
						<div>
							<Image
								style={{ borderRadius: borderRadius }}
								className={clsx(styles.img)}
								src={Home.b3}
								size={'100%'}
							/>
						</div>
						<div>
							<Image
								style={{ borderRadius: borderRadius }}
								className={clsx(styles.img)}
								src={Home.b4}
								size={'100%'}
							/>
						</div>
					</Slider>
				) : (
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
				)}
			</div>
		</div>
	);
};

export default Banner;
