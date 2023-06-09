// Framework
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import { useEffect, useState } from "react";
import axios from "axios";

// Component
import { Info } from "./components/Policy/Info";
import { Carousel } from "@components/Product/Carousel";
import { Policy } from "./components/Policy";
import { ProductList } from "@components/Product/ProductList";

// Model
import Productdetail from "@assets/types/ProductDetail";
import { Comment } from "./components/Comment";

// Style
import styles from "./Detail.module.scss";

// Config
import productAPI from "@/API/productAPI";

const env = import.meta.env;

const Detail = () => {
	const { state } = useLocation();
	const [accessories, setaccessories] = useState<Productdetail[]>([]);
	const product: Productdetail = state.info;
	const urls = product.anhs.map((t) => `${env.VITE_PRODUCT_IMG}/${t.Anh_URL}`);

	const onAddCart = () => {
		const localList: Productdetail[] = localStorage.getItem("carts")
			? JSON.parse(localStorage.getItem("carts"))
			: [];
		let productFound = localList.find((t) => t.ID_SP === product.ID_SP);

		if (productFound) {
			productFound.so_luong += 1;
		} else {
			product.so_luong = 1;
			localList.push(product);
		}

		localStorage.setItem("carts", JSON.stringify(localList));
	};

	useEffect(() => {
		axios.get(productAPI.list({ type: 2 })).then((res) => {
			setaccessories(res.data.data);
		});
	}, []);

	return (
		<>
			<div className={clsx(styles.container, "wide grid p-t-32")}>
				<div className={clsx(styles.detail, "row ali-start")}>
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
								<button className={clsx(styles.button)}>
									<p className="w-100">Mua ngay</p>
								</button>
								<button className={clsx(styles.button)} onClick={() => onAddCart()}>
									<p className="w-100">Thêm vào giỏ hàng</p>
								</button>
							</div>
						</div>
					</div>
				</div>

				{product.ID_DMSP === 1 && (
					<div className="p-b-40">
						<ProductList
							products={accessories}
							isCarousel
							label={`Sản phẩm nên đi kèm với ${product.Ten_SP}`}
						/>
					</div>
				)}
				<div className="p-t-40">
					<ProductList products={accessories} isCarousel label={`Liên quan`} />
				</div>

				<Comment info={product} />
			</div>
		</>
	);
};

export default Detail;
