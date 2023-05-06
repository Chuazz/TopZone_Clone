// Framework
import { HiChevronDown } from 'react-icons/hi';
import clsx from 'clsx';

// Component
import { Button } from '@components/util/Button';
import { Icon } from '@components/util/Icon';
import { useEffect, useState } from 'react';

// Style
import styles from './Dropdown.module.scss';
import { Option } from '@assets/types';
import { tick } from '@assets/image/Layout';
import { Image } from '@components/util/Image';

type DropdownProps = {
	options: Option[];
	defaultOption?: Option;
	onSelect?: Function;
};

const Dropdown = ({ options, defaultOption, onSelect = () => {} }: DropdownProps) => {
	const [curr, setCurr] = useState<Option>(defaultOption || options[0]);
	const [active, setActive] = useState(false);

	const onSelectItem = (item: Option) => {
		setCurr(item);
		onSelect(item);
		setActive(false);
	};

	useEffect(() => {
		const closeOption = (e: MouseEvent) => {
			let element = e.target as HTMLElement;

			if (!element.closest(`.${styles.container}`)) {
				setActive(false);
			}
		};

		window.addEventListener('click', closeOption);

		return () => window.removeEventListener('click', closeOption);
	}, []);

	return (
		<Button
			size="auto"
			shape="retangle"
			rightIcon={<Icon color="#fff" Element={HiChevronDown} />}
			rightClass={clsx(styles.arrow)}
			className={clsx(styles.container, { [styles.active]: active })}
		>
			<p onClick={() => setActive(!active)}>{curr?.label}</p>

			<div className={clsx(styles.option)}>
				{options.map((option, i) => (
					<Button
						size="auto"
						shape="retangle"
						key={i}
						className={clsx(styles.item, { [styles.active]: option.label === curr.label })}
						onClick={() => onSelectItem(option)}
					>
						<div className="row ali-center">
							<Image src={tick} className={clsx(styles.tick, 'm-r-4')} />
							<p className={clsx(styles.label)}>{option.label}</p>
						</div>
					</Button>
				))}
			</div>
		</Button>
	);
};

export default Dropdown;
