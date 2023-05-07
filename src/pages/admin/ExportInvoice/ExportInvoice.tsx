import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Column, useTable } from "react-table";
import Productdetail from "@assets/types/ProductDetail";
import axios from "axios";
import clsx from "clsx";
import util from "@/util";
import { Input } from "@components/Form";
import { FormProvider, useForm } from "react-hook-form";
import useDebounce from "@/hooks/useDebounce";
import { Pagnination } from "@components/Product/Pagnination";
import { format } from "date-fns";
import customerAPI from "@/API/customerAPI";
import exportInvoiceAPI from "@/API/exportInvoiceAPI";

const columns: Column[] = [
	{
		Header: "Khách hàng",
		accessor: "khach_hang.Ten_KH",
	},
	{
		Header: "Số điện thoại",
		accessor: "khach_hang.SDT_KH",
	},
	{
		Header: "Địa chỉ",
		accessor: "khach_hang.DiaChi_KH",
	},
	{
		Header: "Ngày đặt",
		accessor: "NgayDatHang",
	},
	{
		Header: "Nhân viên",
		accessor: "nhan_vien.Ten_NV",
	},
	{
		Header: "Trạng thái",
		accessor: "TinhTrang_PX",
	},
	{
		Header: "Tổng tiền",
		accessor: "TongTien_PX",
	},
];

const ExportInvoice = () => {
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
		axios.get(exportInvoiceAPI.search({ perPage: 8, name: debounceValue, page: currPage })).then((res) => {
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
			<Header title="hóa đơn xuất" />

			{/* <FormProvider {...methods}>
				<Input
					label="Tìm theo tên hóa đơn xuất"
					registerName="name"
					registerOptions={{ required: "Nhập tên hóa đơn xuất" }}
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
											case "TongTien_PX":
												cell.value = util.addCommas(cell.value) + "đ";
												break;
											case "TinhTrang_PX":
												cell.value = cell.value === 1 ? "Đã giao" : "Đang giao";
												break;
											case "NgayDatHang":
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
														cell.column.id === "NgayDatHang" ||
														cell.column.id === "khach_hang.SDT_KH",
													["text-right"]: cell.column.id === "TongTien_PX",
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

export default ExportInvoice;
