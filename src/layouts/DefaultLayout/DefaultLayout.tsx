import { PropsWithChildren } from 'react';

type DefaultLayoutProps = PropsWithChildren<{}>;

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
	return (
		<div>
			This is Default Layout
			<div>{children}</div>
		</div>
	);
};

export default DefaultLayout;
