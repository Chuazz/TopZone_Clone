import { Pagnination } from '@components/Product/Pagnination';
import productAPI from '@config/productAPI';
import Productdetail from '@models/ProductDetail';
import axios from 'axios';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

// Style
import styles from './Search.module.scss';
import { ProductList } from '@components/Product/ProductList';

const Search = () => {
	const [products, setProducts] = useState<Productdetail[]>([]);
	const [result, setResult] = useState({ total: 0, last_page: 1, current_page: 1 });
	const [searchParm] = useSearchParams();

	useEffect(() => {
		if (searchParm.get('q')) {
			axios
				.get(productAPI.search({ name: searchParm.get('q'), page: result.current_page, perPage: 8 }))
				.then((res) => {
					setProducts(res.data.data);
					setResult({ ...result, ...res.data });
				});
		}
	}, [result.current_page, searchParm.get('q')]);

	return (
		<div className="wide grid p-t-32">
			<ProductList
				products={products}
				productClassName={clsx(styles.item)}
				isShowMemory={false}
				label={`Tìm thấy ${result.total} kết quả cho '${searchParm.get('q')}'`}
			/>

			<Pagnination
				lastPage={result.last_page}
				onChangePage={(page: number) => setResult({ ...result, current_page: page })}
			/>
		</div>
	);
};

export default Search;
