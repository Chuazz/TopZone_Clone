// Framework
import clsx from 'clsx';

// Component

// Model
import Productdetail from '@assets/types/ProductDetail';

// Style
import styles from './Comment.module.scss';
import { Form } from '@components/Form';
import CommentForm from './CommentForm';
import { Image } from '@components/util/Image';
import { account } from '@assets/image/Layout/User';
import { formatDistanceToNowStrict } from 'date-fns';
import { vi } from 'date-fns/locale';
import { commentAPI, productAPI } from '@/API';
import binh_luan from '@models/binh_luan.model';
import { useState } from 'react';
import axios from 'axios';

type CommentProps = {
	info: Productdetail;
};

const Comment = ({ info }: CommentProps) => {
	const [comments, setComments] = useState(info.binh_luans);

	const onSubmit = (data: any) => {
		let binhLuan = new binh_luan();

		binhLuan.init(1, info.ID_SP, 1, data.content, new Date());

		commentAPI.add(binhLuan);

		axios.get(productAPI.byId(info.ID_SP)).then((res) => {
			setComments(res.data.data.binh_luans);
		});
	};

	return (
		<div className={clsx(styles.container)}>
			<p className={clsx(styles.label)}>Hỏi đáp về {info.Ten_SP}</p>

			<Form onSubmit={onSubmit}>
				<CommentForm />
			</Form>

			<div
				className={clsx(styles.list, 'p-t-24 m-t-28 row no-wrap flex-column gap-24')}
				style={{ borderTop: '1px solid #717171' }}
			>
				{comments.map((binh_luan, i) => (
					<div key={i} className="row ali-start">
						<div className={clsx(styles.accountImg, 'row ali-center jus-center')}>
							<Image src={account} size={24} />
						</div>

						<div>
							<div className={clsx(styles.info)}>
								<p>{binh_luan.khach_hang.Ten_KH}</p>

								<p>{binh_luan.NoiDung}</p>
							</div>
							<p className={clsx(styles.time)}>
								{formatDistanceToNowStrict(new Date(binh_luan.Ngay_BL), { locale: vi })} trước
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Comment;
