// Framework
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

// Style
import styles from './Product.module.scss';
import Productdetail from '@models/ProductDetail';
import { Image } from '@components/Image';
import util from '@/util';

type ProductProps = PropsWithChildren<{
	className?: string;
	info: Productdetail;
	isShowMemory?: boolean;
}>;

const Product = ({ className, info, isShowMemory = false }: ProductProps) => {
	return (
		<div className={clsx('p-l-12 p-r-12 p-b-24')}>
			<div className={clsx(styles.container, className, 'row flex-column ali-center')}>
				<Image
					src={`https://raw.githubusercontent.com/Chuazz/136_Product_Image/main/${info.anhs[0].Anh_URL}`}
					size="80%"
					className="m-b-12"
				/>

				{isShowMemory && (
					<div className="row ali-center jus-center gap-8">
						{info.dung_luongs.map((dung_luong, i) => (
							<p key={i} className={clsx(styles.capacityItem, { [styles.active]: i === 0 })}>
								{dung_luong.Ten_DL}
							</p>
						))}
					</div>
				)}

				<div className="m-t-12 text-center w-100">
					<p className={clsx(styles.name)}>{info.Ten_SP}</p>
					<p className={clsx(styles.price)}>{util.addCommas(info.Gia_SP)}đ</p>
				</div>
			</div>
		</div>
	);
};

export default Product;
