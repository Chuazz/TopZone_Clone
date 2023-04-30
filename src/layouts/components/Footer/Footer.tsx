// Framework
import clsx from 'clsx';

// Style
import styles from './Footer.module.scss';

const Footer = () => {
	return (
		<div className={clsx(styles.container)}>
			<div className="text-center">
				<p>Ngô Văn Sơn</p>
				<p>2001202222</p>
			</div>
		</div>
	);
};

export default Footer;
