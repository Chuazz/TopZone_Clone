// Framework
import { PropsWithChildren, forwardRef, memo, useState } from 'react';

type ImageProps = PropsWithChildren<{
	src: string;
	className?: string;
	alt?: string;
	size?: number | string;
	style?: React.CSSProperties;
	onClick?: Function;
}>;
export type Ref = HTMLImageElement;

const Image = forwardRef<Ref, ImageProps>(
	({ src, size, style = {}, className, alt = 'error', onClick = () => {} }, ref) => {
		const [errSrc, setErrSrc] = useState('');

		return (
			<img
				className={className}
				src={errSrc || src}
				alt={alt}
				ref={ref}
				style={{ width: size || 'auto', ...style }}
				onError={() => setErrSrc('https://placehold.co/400')}
				onClick={(e) => onClick(e)}
			/>
		);
	},
);

export default memo(Image);
