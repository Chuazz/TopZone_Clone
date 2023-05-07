import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Column, useTable } from "react-table";
import Productdetail from "@assets/types/ProductDetail";
import axios from "axios";
import clsx from "clsx";
import util from "@/util";
import { Image } from "@components/util/Image";
import { Input } from "@components/Form";
import { FormProvider, useForm } from "react-hook-form";
import useDebounce from "@/hooks/useDebounce";
import { Pagnination } from "@components/Product/Pagnination";
import supplierAPI from "@/API/supplierAPI";

const columns: Column[] = [
	{
		Header: "Tên nhà cung cấp",
		accessor: "Ten_NCC",
	},
	{
		Header: "Số điện thoại",
		accessor: "SDT_NCC",
	},
	{
		Header: "Địa chỉ",
		accessor: "DiaChi_NCC",
	},
];

const VITE_IMG = import.meta.env.VITE_PRODUCT_IMG;

const Supplier = () => {
	const methods = useForm();
	const [data, setdata] = useState<Productdetail[]>([]);
	const [search, setSearch] = useState("");
	const [currPage, setCurrPage] = useState(1);
	const [lastPage, setLastPage] = useState(0);

	const debounceValue = useDebounce(search, 800);
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
		columns: columns,
		data: data,
	});

	useEffect(() => {
		axios.get(supplierAPI.search({ perPage: 8, name: debounceValue, page: currPage })).then((res) => {
			setdata(res.data.data);
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
			<Header title="nhà cung cấp" />

			<FormProvider {...methods}>
				<Input
					label="Tìm theo tên nhà cung cấp"
					registerName="name"
					registerOptions={{ required: "Nhập tên nhà cung cấp" }}
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
													["text-center"]: cell.column.id === "SDT_NCC",
												})}
											>
												{cell.value}
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

export default Supplier;
