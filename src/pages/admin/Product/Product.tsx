import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Column, useTable } from "react-table";
import Productdetail from "@assets/types/ProductDetail";
import axios from "axios";
import { productAPI } from "@/API";
import clsx from "clsx";
import util from "@/util";
import { Image } from "@components/util/Image";

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
	const [products, setProducts] = useState<Productdetail[]>([]);
	const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
		columns: columns,
		data: products,
	});

	useEffect(() => {
		axios.get(productAPI.product_list({ perPage: 10 })).then((res) => {
			setProducts(res.data.data);
		});
	}, []);

	return (
		<div>
			<Header title="sản phẩm" />

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
