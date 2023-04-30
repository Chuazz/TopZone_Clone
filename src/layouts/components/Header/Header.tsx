// Framework
import clsx from 'clsx';
import { FiSearch } from 'react-icons/fi';
import { BsFillBagFill } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';

// Component
import { Button } from '@/components/Button';

// Image
import { Image } from '@components/Image';
import { logo } from '@assets/image/Store';

// Style
import styles from './Header.module.scss';
import { useState } from 'react';
import { Icon } from '@components/Icon';

const Header = () => {
	const [searching, setSearching] = useState(false);
	const [active, setActive] = useState(false);
	const [notSearch, setnotSearch] = useState(true);

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
						<div>
							<p className={clsx(styles.navItem, styles.active)}>
								<Image src={logo} />
							</p>
						</div>
					</div>

					<div className={clsx(styles.navbar, 'h-8')}>
						<div>
							<div className="s-0 row ali-center jus-center w-100">
								<div>
									<p className={clsx(styles.navItem)}>iPhone</p>
								</div>

								<div>
									<p className={clsx(styles.navItem)}>Phụ kiện</p>
								</div>
							</div>
						</div>
					</div>

					<div className={clsx(styles.user, 'h-2')}>
						<div className="row ali-center jus-end gap-8">
							<Button onClick={() => onOpenSearchForm()}>
								<FiSearch />
							</Button>

							<a className={clsx(styles.cart, styles.navItem, 'relative')}>
								<Button>
									<BsFillBagFill />
								</Button>
								<p className={clsx(styles.cartCount)}></p>
								<div className={clsx(styles.notify)}>
									<p>Đã thêm sản phẩm vào giỏ hàng</p>
									<div className={clsx(styles.buyBtn)}>
										<button>Xem giỏ hàng</button>
									</div>
								</div>
							</a>
						</div>
					</div>
				</div>

				<div className={clsx(styles.search)}>
					<form action="" method="get" className={clsx(styles.searchForm)}>
						<div className="row ali-center gap-12">
							<Icon Element={FiSearch} />
							<input type="text" name="SP_TEN" placeholder="Tìm kiếm sản phẩm" />
							<Icon Element={IoClose} onClick={() => onCloseSearchForm()} />
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Header;