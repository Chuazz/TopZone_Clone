import Productdetail from "@assets/types/ProductDetail";
import { Image } from "@components/util/Image";
import styles from "./Cart.module.scss";
import clsx from "clsx";
import util from "@/util";
import { Icon } from "@components/util/Icon";
import { IoClose } from "react-icons/io5";

type CartItemProps = {
	cart: Productdetail;
	onCloseClick: Function;
	onChangeNumber: Function;
};

const env = import.meta.env;

const CartItem = ({ cart, onCloseClick = () => {}, onChangeNumber = () => {} }: CartItemProps) => {
	const onHanleInput = (e: React.FormEvent<HTMLInputElement>) => {
		let target = e.target as HTMLInputElement;

		onChangeNumber(cart.ID_SP, parseInt(target.value));
	};
	return (
		<div className={clsx(styles.item, "row ali-center relative")}>
			<Image size={100} src={`${env.VITE_PRODUCT_IMG}/${cart.anhs[0].Anh_URL}`} />

			<div className="flex-1 p-r-12">
				<p>
					{cart.Ten_SP} {cart.mau_sacs[0]?.TenMau} {cart.dung_luongs[0]?.Ten_DL}
				</p>
			</div>

			<div className="text-center">
				<p>{util.addCommas(cart.Gia_SP)}đ</p>
				<input
					type="number"
					className={clsx(styles.count)}
					defaultValue={cart.so_luong}
					min={0}
					onInput={onHanleInput}
				/>
			</div>

			<div className={clsx(styles.remove)}>
				<Icon Element={IoClose} color="#292929" onClick={() => onCloseClick(cart)} />
			</div>
		</div>
	);
};

export default CartItem;
