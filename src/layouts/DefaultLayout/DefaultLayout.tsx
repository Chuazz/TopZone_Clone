// Framework
import { PropsWithChildren } from 'react';
import clsx from 'clsx';

// Style
import styles from './Defautlyout.module.scss';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

type DefaultLayoutProps = PropsWithChildren<{}>;

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
	return (
		<div>
			<Header />

			<div className={clsx(styles.content)}>
				<div>{children}</div>
			</div>

			<Footer />
		</div>
	);
};

export default DefaultLayout;
