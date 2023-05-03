// Framework
import clsx from 'clsx';

// Style
import styles from './ProductItem.module.scss';
import Productdetail from '@models/ProductDetail';
import { Image } from '@components/util/Image';
import util from '@/util';
import { Link } from 'react-router-dom';

type ProductItemProps = {
	className?: string;
	info: Productdetail;
	isShowMemory?: boolean;
};

const env = import.meta.env;

const ProductItem = ({ className, info, isShowMemory = false }: ProductItemProps) => {
	return (
		<div className={clsx(className, 'p-l-12 p-r-12 p-b-24')}>
			<Link
				to={`/home/detail/${info.Ten_SP}`}
				state={{ info }}
				className={clsx(styles.body, 'row flex-column ali-center')}
			>
				<Image src={`${env.VITE_PRODUCT_IMG}/${info.anhs[0].Anh_URL}`} size="80%" className="m-b-12" />

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
			</Link>
		</div>
	);
};

export default ProductItem;
