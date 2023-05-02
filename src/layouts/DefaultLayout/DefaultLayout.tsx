// Framework
import clsx from 'clsx';

// Style
import styles from './Defautlyout.module.scss';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Outlet } from 'react-router-dom';

type DefaultLayoutProps = {};

const DefaultLayout = ({}: DefaultLayoutProps) => {
	return (
		<div>
			<Header />

			<div className={clsx(styles.content)}>
				<Outlet />
			</div>

			<Footer />
		</div>
	);
};

export default DefaultLayout;
