// Framework
import clsx from 'clsx';

// Component
import { Carousel } from '@components/Product/Carousel';

// Style
import styles from './Home.module.scss';
import { Image } from '@components/util/Image';
import { accessory, phone } from '@assets/image/Layout/Category';
import { useEffect, useState } from 'react';
import axios from 'axios';
import productAPI from '@config/productAPI';
import Productdetail from '@models/ProductDetail';
import { NavLink } from 'react-router-dom';
import { ProductList } from '@components/Product/ProductList';

const Home = () => {
	const [phones, setPhones] = useState<Productdetail[]>([]);
	const [accessories, setAccessories] = useState<Productdetail[]>([]);

	useEffect(() => {
		axios.get(productAPI.product_list({ perPage: 12 })).then((res) => {
			setPhones(res.data.data);
		});

		axios.get(productAPI.product_list({ type: 2, perPage: 12 })).then((res) => {
			setAccessories(res.data.data);
		});
	}, []);

	return (
		<div>
			<Carousel />

			<div className="wide grid">
				<div className={clsx('row jus-center gap-16 p-t-40 p-b-32')}>
					<NavLink to={'/home/phone'} className={styles.categoryItem}>
						<div className="row flex-column ali-center h-100">
							<div className="flex-1 row flex-column jus-end">
								<Image src={phone} size={110} />
							</div>
							<p>iPhone</p>
						</div>
					</NavLink>

					<NavLink to={'/home/accessory'} className={styles.categoryItem}>
						<div className="row flex-column ali-center h-100">
							<div className="flex-1 row flex-column jus-end">
								<Image src={accessory} size={70} />
							</div>
							<p>Phụ kiện</p>
						</div>
					</NavLink>
				</div>

				<div className="p-b-40">
					<ProductList
						products={phones}
						isCarousel
						label="iPhone"
						showMore="Xem thêm"
						showMoreLinkTo="phone"
					/>
				</div>

				<div className="p-t-32">
					<ProductList
						products={accessories}
						isCarousel
						label="Phụ kiện"
						showMore="Xem thêm"
						showMoreLinkTo="accessory"
					/>
				</div>
			</div>
		</div>
	);
};

export default Home;
