// Framework
import { PropsWithChildren } from 'react';

// style
import './GlobalStyle.scss';
import './library/Grid.scss';
import './library/Margin.scss';
import './library/Padding.scss';

type GlobalStyleProps = PropsWithChildren<{}>;

const GlobalStyle = ({ children }: GlobalStyleProps) => {
	return <>{children}</>;
};

export default GlobalStyle;
