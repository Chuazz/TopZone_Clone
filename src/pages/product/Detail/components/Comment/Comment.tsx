// Framework
import clsx from 'clsx';

// Component

// Model
import Productdetail from '@models/ProductDetail';

// Style
import styles from './Comment.module.scss';
import { Form } from '@components/Form';
import CommentForm from './CommentForm';
import { Image } from '@components/util/Image';
import { account } from '@assets/image/Layout/User';
import { formatDistanceToNow, formatDistanceToNowStrict } from 'date-fns';
import { vi } from 'date-fns/locale';

type CommentProps = {
	info: Productdetail;
};

const Comment = ({ info }: CommentProps) => {
	return (
		<div className={clsx(styles.container)}>
			<p className={clsx(styles.label)}>Hỏi đáp về {info.Ten_SP}</p>

			<Form>
				<CommentForm />
			</Form>

			<div className="p-t-24 m-t-28" style={{ borderTop: '1px solid #717171' }}>
				{info.binh_luans.map((binh_luan, i) => (
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
								{formatDistanceToNow(new Date(binh_luan.Ngay_BL), { locale: vi })}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Comment;
