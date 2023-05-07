import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Column, useTable } from "react-table";
import Productdetail from "@assets/types/ProductDetail";
import axios from "axios";
import { productAPI } from "@/API";
import clsx from "clsx";
import util from "@/util";
import { Image } from "@components/util/Image";
import { Input } from "@components/Form";
import { FormProvider, useForm } from "react-hook-form";
import useDebounce from "@/hooks/useDebounce";
import { Pagnination } from "@components/Product/Pagnination";

const anh = "anhs[0].Anh_URL";

const columns: Column[] = [
	{
		Header: "Danh mục",
		accessor: "ID_DMSP",
	},
	{
		Header: "Ảnh",
		accessor: anh,
	},
	{
		Header: "Tên",
		accessor: "Ten_SP",
	},
	{
		Header: "Đơn giá",
		accessor: "Gia_SP",
	},
	{
		Header: "Tồn kho",
		accessor: "SoLuong_SP",
	},
];

const VITE_IMG = import.meta.env.VITE_PRODUCT_IMG;

const Product = () => {
	const methods = useForm();
	const [products, setProducts] = useState<Productdetail[]>([]);
	const [search, setSearch] = useState("");
	const [currPage, setCurrPage] = useState(1);
	const [lastPage, setLastPage] = useState(0);

	const debounceValue = useDebounce(search, 800);
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
		columns: columns,
		data: products,
	});

	useEffect(() => {
		axios.get(productAPI.search({ perPage: 8, name: debounceValue, page: currPage })).then((res) => {
			setProducts(res.data.data);
			setLastPage(res.data.last_page);
		});
	}, [debounceValue, currPage]);

	const onInput = (e: React.FormEvent<HTMLInputElement>) => {
		let target = e.target as HTMLInputElement;

		setSearch(target.value);
	};

	const onChangePage = (pageIndex: number) => {
		setCurrPage(pageIndex);
	};

	return (
		<div>
			<Header title="sản phẩm" />

			<FormProvider {...methods}>
				<Input
					label="Tìm theo tên sản phẩm"
					registerName="name"
					registerOptions={{ required: "Nhập tên sản phẩm" }}
					className="m-t-16 m-b-16 m-l-24 m-r-24"
					background="white"
					inputAttributes={{ onInput: onInput }}
				/>
			</FormProvider>

			<div className="row jus-end m-b-16 m-r-24">
				<Pagnination onChangePage={onChangePage} lastPage={lastPage} />
			</div>

			<div className="table">
				<table {...getTableProps()}>
					<thead>
						{headerGroups.map((headerGroup) => (
							<tr {...headerGroup.getHeaderGroupProps()}>
								{headerGroup.headers.map((column) => (
									<th {...column.getHeaderProps()}>{column.render("Header")}</th>
								))}
							</tr>
						))}
					</thead>
					<tbody {...getTableBodyProps()}>
						{rows.map((row) => {
							prepareRow(row);
							return (
								<tr {...row.getRowProps()}>
									{row.cells.map((cell) => {
										if (cell.column.id === "Gia_SP") {
											cell.value = util.addCommas(cell.value) + "đ";
										}
										return (
											<td
												{...cell.getCellProps()}
												className={clsx({
													["text-center"]:
														cell.column.id === anh ||
														cell.column.id === "ID_DMSP" ||
														cell.column.id === "Gia_SP" ||
														cell.column.id === "SoLuong_SP",
												})}
											>
												{cell.column.id === anh ? (
													<Image size={100} src={`${VITE_IMG}/${cell.value}`} />
												) : (
													cell.value
												)}
											</td>
										);
									})}
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default Product;
