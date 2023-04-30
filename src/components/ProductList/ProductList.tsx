import { Product } from '@components/Product';
import Productdetail from '@models/ProductDetail';
import { PropsWithChildren } from 'react';

type ProductListProps = PropsWithChildren<{
	label?: string | JSX.Element;
	showMore?: string | JSX.Element;
	showMoreLinkTo?: string;
	products: Productdetail[];
}>;

const ProductList = ({ label, showMore, showMoreLinkTo, products }: ProductListProps) => {
	return (
		<div>
			<div className="row ali-center jus-between">
				<p>{label}</p>
				<p>{showMore}</p>
			</div>

			<div className="row">
				{products.map((product, i) => (
					<Product key={i} info={product} />
				))}
			</div>
		</div>
	);
};

export default ProductList;
