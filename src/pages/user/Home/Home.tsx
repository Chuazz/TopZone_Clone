// Framework
import clsx from 'clsx';

// Component
import { Banner } from '@components/Banner';

// Style
import styles from './Home.module.scss';
import { Image } from '@components/Image';
import { accessory, phone } from '@assets/image/Layout/Category';
import { useEffect, useState } from 'react';
import axios from 'axios';
import productAPI from '@config/productAPI';
import Productdetail from '@models/ProductDetail';
import ProductList from '@components/ProductList/ProductList';

const Home = () => {
	const [phones, setPhones] = useState<Productdetail[]>([]);
	const [accessories, setAccessories] = useState<Productdetail[]>([]);

	useEffect(() => {
		axios.get(productAPI.product_list({})).then((res) => {
			setPhones(res.data.data);
		});

		axios.get(productAPI.product_list({ type: 2 })).then((res) => {
			setAccessories(res.data.data);
		});
	}, []);

	return (
		<div>
			<Banner />

			<div className={clsx('row jus-center gap-16 p-t-32 p-b-32')}>
				<div className={styles.categoryItem}>
					<div className="row flex-column ali-center h-100">
						<div className="flex-1 row flex-column jus-end">
							<Image src={phone} size={110} />
						</div>
						<p>iPhone</p>
					</div>
				</div>
				<div className={styles.categoryItem}>
					<div className="row flex-column ali-center h-100">
						<div className="flex-1 row flex-column jus-end">
							<Image src={accessory} size={70} />
						</div>
						<p>Phụ kiện</p>
					</div>
				</div>
			</div>

			<ProductList products={phones} label="iPhone" showMore="Xem thêm" />
			<ProductList products={accessories} label="Phụ kiện" showMore="Xem thêm" />
		</div>
	);
};

export default Home;
