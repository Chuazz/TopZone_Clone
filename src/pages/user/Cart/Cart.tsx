import clsx from "clsx";
import Productdetail from "@assets/types/ProductDetail";
import { useEffect, useState } from "react";
import CartItem from "./CartItem";
import styles from "./Cart.module.scss";
import util from "@/util";
import { Input, SubmitButton } from "@components/Form";
import { FormProvider, useForm } from "react-hook-form";
import phieu_xuat from "@models/phieu_xuat.model";
import { billAPI, billDetailAPI } from "@/API";
import { format } from "date-fns";
import chi_tiet_phieu_xuat from "@models/chi_tiet_phieu_xuat.model";

type FormValues = {
	gender: boolean;
	name: string;
	address: string;
	phone: string;
};

const Cart = () => {
	const [carts, setCarts] = useState<Productdetail[]>(JSON.parse(localStorage.getItem("carts")) || []);
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const methods = useForm<FormValues>();

	const onCloseClick = (cart: Productdetail) => {
		let index = carts.findIndex((t) => t.ID_SP === cart.ID_DMSP);

		setCarts((prev) => {
			let newCarts = carts.splice(index, 1);

			localStorage.setItem("carts", JSON.stringify(newCarts));

			return newCarts;
		});
	};

	const onChangeNumber = (productId: number, number: number) => {
		let found = carts.find((t) => t.ID_SP === productId)!;

		found.so_luong = number;
		setTotalPrice(carts.reduce((total, curr) => total + curr.Gia_SP * curr.so_luong, 0));
		localStorage.setItem("carts", JSON.stringify(carts));
	};

	useEffect(() => {
		setTotalPrice(carts.reduce((total, curr) => total + curr.Gia_SP * curr.so_luong, 0));
	}, [carts]);

	const onSubmit = (data: FormValues) => {
		if (carts.length >= 0) {
			let bill = new phieu_xuat();

			bill.init(0, 1, 1, format(new Date(), "yyyy-MM-dd HH:mm:ss"), totalPrice, 0);

			billAPI.add(bill);

			carts.forEach((cart) => {
				let billDetail = new chi_tiet_phieu_xuat();
				billDetail.init(0, cart.ID_SP, cart.so_luong, format(new Date(), "yyyy-MM-dd"));

				billDetailAPI.add(billDetail);
			});

			methods.reset();
			setCarts([]);
			localStorage.removeItem("carts");
		}
	};

	return (
		<div className="wide grid p-t-32">
			<div className="row gap-24">
				<div className={clsx(styles.cartBlock, "flex-1 p-r-12 p-t-16 p-b-16")}>
					{carts.map((cart, i) => (
						<CartItem cart={cart} key={i} onCloseClick={onCloseClick} onChangeNumber={onChangeNumber} />
					))}
				</div>

				<div className={clsx(styles.cartBlock, styles.invoice, "h-4")}>
					<div className={clsx(styles.devide, "row ali-center jus-between")}>
						<p>Tổng sản phẩm({carts.length})</p>
						<p className={clsx(styles.price)}>{util.addCommas(totalPrice)}đ</p>
					</div>

					<div>
						<p>Thông tin khách hàng</p>

						<FormProvider {...methods}>
							<form action="POST" onSubmit={methods.handleSubmit(onSubmit)}>
								<div className="row flex-column gap-20">
									<div className="row ali-center gap-12 p-t-12">
										<Input
											registerName="gender"
											type="radio"
											label="Anh"
											inputAttributes={{ id: "male", defaultValue: "Nam" }}
											registerOptions={{ required: true }}
										/>
										<Input
											registerName="gender"
											type="radio"
											label="Chị"
											inputAttributes={{ id: "female", defaultValue: "Nữ" }}
										/>
									</div>

									<Input
										registerName="name"
										label="Họ và tên"
										registerOptions={{ required: "Vui lòng nhập họ tên" }}
									/>
									<Input
										registerName="phone"
										label="Số điện thoại"
										registerOptions={{ required: "Vui lòng nhập số điện thoại" }}
									/>
									<Input
										registerName="address"
										label="Địa chỉ"
										registerOptions={{ required: "Vui lòng nhập địa chỉ" }}
									/>

									<SubmitButton text="Đặt hàng" />
								</div>
							</form>
						</FormProvider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
