import clsx from "clsx";
import { NavLink, Outlet } from "react-router-dom";

import styles from "./AdminLayout.module.scss";
import { Image } from "@components/util/Image";
import { logo } from "@assets/image/Store";

const navs = [
	{
		name: "Sản phẩm",
		path: "product",
	},
	{
		name: "Nhà cung cấp",
		path: "supplier",
	},
	{
		name: "Nhân viên",
		path: "staff",
	},
	{
		name: "Khách hàng",
		path: "customer",
	},
	{
		name: "Thông số kỹ thuật",
		path: "specification",
	},
	{
		name: "Hóa đơn xuất",
		path: "export-invoice",
	},
	{
		name: "Hóa đơn xuất",
		path: "import-invoice",
	},
];

const AdminLayout = () => {
	return (
		<div className={clsx(styles.container, "row wide grid")}>
			<div className={clsx(styles.sidebar, "h-2")}>
				<div className={clsx(styles.logo, "row ali-center jus-center")}>
					<Image size={120} src={logo} />
				</div>

				<div>
					{navs.map((nav, i) => (
						<NavLink
							className={(nav) => clsx(styles.navItem, { [styles.active]: nav.isActive })}
							to={nav.path}
							key={i}
						>
							{nav.name}
						</NavLink>
					))}
				</div>
			</div>
			<div className="flex-1">
				<div className={clsx(styles.content)}>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default AdminLayout;
