// Framework
import { useLocation } from 'react-router-dom';
import clsx from 'clsx';

// Component
import { Info } from './components/Info';
import { Button } from '@components/Button';
import { Carousel } from '@components/Carousel';

// Model
import Productdetail from '@models/ProductDetail';

// Style
import styles from './Detail.module.scss';
import { Policy } from './components/Policy';

const env = import.meta.env;

const Detail = () => {
	const { state } = useLocation();
	const product: Productdetail = state.info;
	const urls = product.anhs.map((t) => `${env.VITE_PRODUCT_IMG}/${t.Anh_URL}`);

	console.log(product);

	return (
		<div className="wide grid p-t-32">
			<div className={clsx(styles.container, 'row')}>
				<div className="h-5">
					<Carousel customPaging banners={urls} arrowPos="-60px" />
				</div>

				<div className="flex-1">
					<div className="row flex-column h-100 jus-between">
						<div>
							<Info product={product} />

							<Policy />
						</div>

						<div className="row ali-center jus-center gap-16 p-t-16">
							<Button className={clsx(styles.button)} shape="retangle" size={'auto'}>
								Mua ngay
							</Button>
							<Button className={clsx(styles.button)} shape="retangle" size={'auto'}>
								Thêm vào giỏ hàng
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Detail;
