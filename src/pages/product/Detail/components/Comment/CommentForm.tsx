// Framework
import clsx from 'clsx';

// Style
import styles from './Comment.module.scss';
import { Input } from '@components/Form';

const CommentForm = () => {
	return (
		<div className="row flex-column gap-24">
			<div className="row ali-center gap-16">
				<Input
					registerName="name"
					label="Họ và tên"
					className={'flex-1'}
					registerOptions={{ required: 'Vui lòng nhập họ tên của bạn' }}
				/>

				<button className={clsx(styles.button)}>Bình luận</button>
			</div>
			<Input
				registerName="content"
				label="Câu hỏi"
				tag="textarea"
				registerOptions={{ required: 'Vui lòng nhập câu hỏi' }}
			/>
		</div>
	);
};

export default CommentForm;
