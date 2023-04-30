// Framework
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

// Style
import styles from './Product.module.scss';
import Productdetail from '@models/ProductDetail';

type ProductProps = PropsWithChildren<{
	className?: string;
	info: Productdetail;
}>;

const Product = ({ className, info }: ProductProps) => {
	return <div className={clsx(className)}>{info.Ten_SP}</div>;
};

export default Product;
