// Framework
import clsx from "clsx";
import { useEffect, useState } from "react";
import axios from "axios";

// Component
import { Carousel } from "@components/Product/Carousel";
import { Dropdown } from "@components/util/Dropdown";
import { Pagnination } from "@components/Product/Pagnination";

// Style
import styles from "./Accessory.module.scss";

// Image
import { b1, b2 } from "@assets/image/Banner/Accessory";

// Type
import { Option } from "@assets/types";
import Productdetail from "@assets/types/ProductDetail";

// Config
import productAPI from "@/API/productAPI";
import { ProductList } from "@components/Product/ProductList";

const filters: Option[] = [
	{
		label: "Giá thấp đến cao",
		value: "asc",
	},
	{
		label: "Giá cao đến thấp",
		value: "desc",
	},
];

const categories: string[] = ["", "iPhone 14", "iPhone 13", "iPhone 12", "iPhone 11", "iPhone SE"];

const Accessory = () => {
	const [accessories, setaccessories] = useState<Productdetail[]>([]);
	const [currPage, setCurrPage] = useState(1);
	const [lastPage, setlastPage] = useState(1);
	const [currFilter, setCurrFilter] = useState({ name: "", sort: "asc" });

	const onCategoryItemClick = (name: string) => {
		if (name === "Tất cả") {
			name = "";
		}
		setCurrFilter({ ...currFilter, name });
	};

	const onSortItemClick = (option: Option) => {
		setCurrFilter({ ...currFilter, sort: option.value });
	};

	const onChangePage = (page: number) => {
		setCurrPage(page);
	};

	useEffect(() => {
		axios.get(productAPI.list({ ...currFilter, page: currPage, type: 2 })).then((res) => {
			setaccessories(res.data.data);
			setlastPage(res.data.last_page);
		});
	}, [currPage, currFilter]);

	return (
		<div className={clsx(styles.container)}>
			<div className="wide grid">
				<p className={clsx(styles.label)}>Phụ kiện</p>

				<Carousel borderRadius="20px" banners={[b1, b2]} />

				<div className="row ali-center jus-between p-t-32 p-b-32">
					<div className={clsx(styles.categoryList, "row ali-center gap-24")}>
						{categories.map((category, i) => (
							<p
								key={i}
								className={clsx({ [styles.active]: category === currFilter.name })}
								onClick={() => {
									onCategoryItemClick(category);
								}}
							>
								{category ? category : "Tất cả"}
							</p>
						))}
					</div>

					<div className="row ali-center">
						<p className="t-white m-r-8">Xếp theo: </p>

						<Dropdown options={filters} onSelect={onSortItemClick} />
					</div>
				</div>

				<ProductList products={accessories} />
				<Pagnination onChangePage={onChangePage} lastPage={lastPage} />
			</div>
		</div>
	);
};

export default Accessory;
