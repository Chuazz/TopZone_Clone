import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Column, useTable } from "react-table";
import Productdetail from "@assets/types/ProductDetail";
import axios from "axios";
import clsx from "clsx";
import util from "@/util";
import useDebounce from "@/hooks/useDebounce";
import { Pagnination } from "@components/Product/Pagnination";
import { format } from "date-fns";
import exportInvoiceAPI from "@/API/exportInvoiceAPI";
import importInvoiceAPI from "@/API/importInvoiceAPI";

const columns: Column[] = [
	{
		Header: "Nhà cung cấp",
		accessor: "nha_cung_cap.Ten_NCC",
	},
	{
		Header: "Số điện thoại",
		accessor: "nha_cung_cap.SDT_NCC",
	},
	{
		Header: "Ngày nhập",
		accessor: "NgayNhap",
	},
	{
		Header: "Nhân viên",
		accessor: "nhan_vien.Ten_NV",
	},
	{
		Header: "Tổng tiền",
		accessor: "TongTien_PN",
	},
];

const ImportInvoice = () => {
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
		axios.get(importInvoiceAPI.search({ perPage: 8, name: debounceValue, page: currPage })).then((res) => {
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
			<Header title="hóa đơn nhập" />

			{/* <FormProvider {...methods}>
				<Input
					label="Tìm theo tên hóa đơn nhập"
					registerName="name"
					registerOptions={{ required: "Nhập tên hóa đơn nhập" }}
					className="m-t-16 m-b-16 m-l-24 m-r-24"
					background="white"
					inputAttributes={{ onInput: onInput }}
				/>
			</FormProvider> */}

			<div className="row jus-end m-t-16 m-b-16 m-r-24">
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
										switch (cell.column.id) {
											case "TongTien_PN":
												cell.value = util.addCommas(cell.value) + "đ";
												break;
											case "NgayNhap":
												cell.value = format(new Date(cell.value), "dd-MM-yyyy HH:mm");
												break;
											default:
												break;
										}
										return (
											<td
												{...cell.getCellProps()}
												className={clsx({
													["text-center"]:
														cell.column.id === "NgayNhap" ||
														cell.column.id === "nha_cung_cap.SDT_NCC",
													["text-right"]: cell.column.id === "TongTien_PN",
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

export default ImportInvoice;
