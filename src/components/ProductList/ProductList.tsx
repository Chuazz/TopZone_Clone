// Framework
import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';

// Component
import { Product } from '@components/Product';

// Model
import Productdetail from '@models/ProductDetail';

// Style
import styles from './Product.module.scss';
import { Icon } from '@components/Icon';

type ProductListProps = PropsWithChildren<{
	label: string | JSX.Element;
	showMore?: string | JSX.Element;
	showMoreLinkTo?: string;
	products: Productdetail[];
}>;

const ProductList = ({ label, showMore, showMoreLinkTo, products }: ProductListProps) => {
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

			<div className="row wrapper-12">
				{products.map((product, i) => (
					<Product key={i} info={product} />
				))}
			</div>
		</div>
	);
};

export default ProductList;
