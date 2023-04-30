// Framework
import { PropsWithChildren } from 'react';

// style
import './GlobalStyle.module.scss';

type GlobalStyleProps = PropsWithChildren<{}>;

const GlobalStyle = ({ children }: GlobalStyleProps) => {
	return <>{children}</>;
};

export default GlobalStyle;
