// Framework
import clsx from 'clsx';
import TextareaAutosize from 'react-textarea-autosize';
import { useFormContext } from 'react-hook-form';

// Style
import styles from './Comment.module.scss';
import { Input } from '@components/Form';
import { Button } from '@components/Form/Button';

const CommentForm = () => {
	const { register } = useFormContext();
	return (
		<div className="row flex-column gap-24">
			<div className="row ali-center gap-16">
				<Input registerName="name" label="Họ và tên" className={'flex-1'} />

				<Button center shape="retangle" size={'auto'} className={clsx(styles.button)}>
					Bình luận
				</Button>
			</div>
			<Input registerName="content" label="Câu hỏi" tag="textarea" />
		</div>
	);
};

export default CommentForm;
