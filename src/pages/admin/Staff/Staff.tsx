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
import staffAPI from "@/API/staffAPI";
import { format } from "date-fns";

const columns: Column[] = [
	{
		Header: "Họ và tên",
		accessor: "Ten_NV",
	},
	{
		Header: "Số điện thoại",
		accessor: "SDT_NV",
	},
	{
		Header: "Địa chỉ",
		accessor: "DiaChi_NV",
	},
	{
		Header: "Giới tính",
		accessor: "GioiTinh_NV",
	},
	{
		Header: "Ngày sinh",
		accessor: "NgaySinh",
	},
	{
		Header: "Cửa hàng",
		accessor: "Ten_CH",
	},
];

const Staff = () => {
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
		axios.get(staffAPI.search({ perPage: 8, name: debounceValue, page: currPage })).then((res) => {
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
			<Header title="nhân viên" />

			<FormProvider {...methods}>
				<Input
					label="Tìm theo tên nhân viên"
					registerName="name"
					registerOptions={{ required: "Nhập tên nhân viên" }}
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
										switch (cell.column.id) {
											case "Gia_SP":
												cell.value = util.addCommas(cell.value) + "đ";
												break;
											case "NgaySinh":
												cell.value = format(new Date(cell.value), "dd-MM-yyyy");
												break;

											default:
												break;
										}
										return (
											<td
												{...cell.getCellProps()}
												className={clsx({
													["text-center"]:
														cell.column.id === "SDT_NV" ||
														cell.column.id === "NgaySinh" ||
														cell.column.id === "GioiTinh_NV",
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

export default Staff;
