// Framework
import clsx from 'clsx';
import { Link } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';

// Component
import { Product } from '@components/Product';

// Model
import Productdetail from '@models/ProductDetail';

// Style
import styles from './Product.module.scss';
import { Icon } from '@components/Icon';
import { NextArrow, PrevArrow } from '@components/SlickArrow';
import Slider from 'react-slick';

type ProductListProps = {
	label?: string | JSX.Element;
	showMore?: string | JSX.Element;
	showMoreLinkTo?: string;
	products: Productdetail[];
	productClassName?: string;
	isShowMemory?: boolean;
	isCarousel?: boolean;
};

const ProductList = ({
	label,
	showMore,
	productClassName,
	showMoreLinkTo,
	products,
	isCarousel = false,
	isShowMemory = true,
}: ProductListProps) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 600,
		slidesToShow: 4,
		slidesToScroll: 4,
		prevArrow: <PrevArrow left="-50px" />,
		nextArrow: <NextArrow right="-50px" />,
	};

	return (
		<div className={clsx(styles.container)}>
			<div className="row ali-center jus-between p-b-16">
				<p className={clsx(styles.label)}>{label}</p>
				{showMoreLinkTo && showMore && (
					<div className={clsx(styles.showMore, 'row ali-center')}>
						<Link to={showMoreLinkTo} className="p-r-4">
							{showMore}
						</Link>
						<Icon size={24} Element={BiChevronRight} />
					</div>
				)}
			</div>

			<div className="wrapper-12">
				{!isCarousel ? (
					<div className="row">
						{products.map((product, i) => (
							<Product
								key={i}
								info={product}
								isShowMemory={isShowMemory}
								className={clsx(styles.item, productClassName)}
							/>
						))}
					</div>
				) : (
					<div>
						<Slider {...settings}>
							{products.map((product, i) => (
								<Product key={i} info={product} />
							))}
						</Slider>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProductList;
