// Framework
import clsx from 'clsx';
import { useState } from 'react';

// Model
import Productdetail from '@assets/types/ProductDetail';

// Util
import util from '@/util';

// Style
import styles from '../../../Detail.module.scss';

type InfoProps = {
	product: Productdetail;
};

const Info = ({ product }: InfoProps) => {
	const [currColor, setCurrColor] = useState(product.mau_sacs[0]);
	const [currCapacity, setCurrCapacity] = useState(product.dung_luongs[0]);

	return (
		<div>
			<p className={clsx(styles.label)}>{product.Ten_SP}</p>
			<p className={clsx(styles.price)}>{util.addCommas(product.Gia_SP)}đ</p>
			{currCapacity && (
				<div className="p-b-16">
					<p className="t-white p-b-8">Dung lượng</p>
					<div className="row ali-center gap-12">
						{product.dung_luongs.map((dung_luong, i) => (
							<p
								key={i}
								className={clsx(styles.capacity, {
									[styles.active]: dung_luong.Ten_DL === currCapacity.Ten_DL,
								})}
								onClick={() => setCurrCapacity(dung_luong)}
							>
								{dung_luong.Ten_DL}
							</p>
						))}
					</div>
				</div>
			)}
			{currColor && (
				<div className="p-b-16">
					<p className="t-white p-b-8">Màu sắc: {currColor.TenMau}</p>
					<div className="row ali-center gap-12">
						{product.mau_sacs.map((mau_sac, i) => (
							<div
								key={i}
								className={clsx(styles.colorBorder, {
									[styles.active]: mau_sac.TenMau === currColor.TenMau,
								})}
								style={{ background: `${util.getColor(mau_sac.TenMau)}` }}
								onClick={() => setCurrColor(mau_sac)}
							>
								<p className={clsx(styles.color)}></p>
							</div>
						))}
					</div>
				</div>
			)}
		</div>
	);
};

export default Info;
