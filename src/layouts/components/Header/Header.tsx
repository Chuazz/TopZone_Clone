// Framework
import clsx from 'clsx';
import { BsFillBagFill } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { HiMagnifyingGlass } from 'react-icons/hi2';

// Component
import { Button } from '@components/util/Button';

// Image
import { Image } from '@components/util/Image';
import { appleLogo, logo } from '@assets/image/Store';

// Style
import styles from './Header.module.scss';
import { useState } from 'react';
import { Icon } from '@components/util/Icon';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
	const [searching, setSearching] = useState(false);
	const [active, setActive] = useState(false);
	const [notSearch, setnotSearch] = useState(true);
	const navigate = useNavigate();

	const onOpenSearchForm = () => {
		setActive(true);
		setSearching(true);
		setnotSearch(false);
		setSearching(true);
	};

	const onCloseSearchForm = () => {
		setSearching(false);
		setnotSearch(true);
	};

	const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		const element = e.target as HTMLInputElement;

		if (e.key === 'Enter') {
			navigate(`/home/search?q=${element.value}`);
			onCloseSearchForm();
		}
	};

	return (
		<div
			className={clsx(styles.container, 'wide grid', {
				[styles.searching]: searching,
				[styles.active]: active,
				[styles.notSearch]: notSearch,
			})}
		>
			<div className={clsx(styles.layout)} onClick={() => onCloseSearchForm()}></div>
			<div className="relative">
				<div className={clsx(styles.body, 'row ali-center jus-between relative')}>
					<div className={clsx(styles.logo, 'h-2')}>
						<Link to={'/home'} className={clsx(styles.navItem, styles.active, 'row ali-center')}>
							<Image src={logo} size={112} className={clsx(styles.logoImg)} />

							<Image src={appleLogo} size={32} />
						</Link>
					</div>

					<div className={clsx(styles.navbar, 'h-8')}>
						<div>
							<div className="s-0 row ali-center jus-center w-100">
								<div>
									<NavLink
										to={'/home/phone'}
										className={(nav) => clsx(styles.navItem, { [styles.active]: nav.isActive })}
									>
										iPhone
									</NavLink>
								</div>

								<div>
									<NavLink
										to={'/home/accessory'}
										className={(nav) => clsx(styles.navItem, { [styles.active]: nav.isActive })}
									>
										Phụ kiện
									</NavLink>
								</div>
							</div>
						</div>
					</div>

					<div className={clsx(styles.user, 'h-2')}>
						<div className="row ali-center jus-end gap-8">
							<Button onClick={() => onOpenSearchForm()}>
								<Icon size={16} Element={HiMagnifyingGlass} />
							</Button>

							<Link to={'/user/cart'} className={clsx(styles.cart, styles.navItem, 'relative')}>
								<Button>
									<Icon size={16} Element={BsFillBagFill} />
								</Button>
							</Link>
						</div>
					</div>
				</div>

				<div className={clsx(styles.search)}>
					<div className={clsx(styles.searchForm)}>
						<div className="row ali-center gap-12">
							<Icon Element={HiMagnifyingGlass} />
							<input type="text" onKeyDown={(e) => onKeyDown(e)} placeholder="Tìm kiếm sản phẩm" />
							<Icon Element={IoClose} onClick={() => onCloseSearchForm()} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
