import clsx from "clsx";
import styles from "./Header.module.scss";

type HeaderProps = {
	title: string;
};

const Header = ({ title }: HeaderProps) => {
	return <div className={clsx(styles.container)}>Danh sách {title}</div>;
};

export default Header;
