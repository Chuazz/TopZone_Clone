// Framework
import clsx from 'clsx';
import { useState } from 'react';

// Style
import styles from './Pagnination.module.scss';

type PagninationProps = {
	lastPage: number;
	onChangePage: Function;
};

const Pagnination = ({ lastPage, onChangePage = () => {} }: PagninationProps) => {
	const pages = [];
	const [currPage, setCurrPage] = useState(1);

	for (let i = 1; i <= lastPage; i++) {
		pages.push(i);
	}

	const onClickItem = (item: number) => {
		setCurrPage(item);
		onChangePage(item);
	};

	return (
		<div className={clsx(styles.container, 'row ali-center jus-center gap-8')}>
			{pages.map((page, i) => (
				<p onClick={() => onClickItem(page)} key={i} className={clsx({ [styles.active]: page === currPage })}>
					{page}
				</p>
			))}
		</div>
	);
};

export default Pagnination;
