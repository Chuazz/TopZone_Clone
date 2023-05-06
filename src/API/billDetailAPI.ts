import chi_tiet_phieu_xuat from "@models/chi_tiet_phieu_xuat.model";

const VITE_API = import.meta.env.VITE_API;

const billDetailAPI = {
	add: (billDetail: chi_tiet_phieu_xuat) => {
		fetch(`${VITE_API}/chi-tiet-phieu-xuat`, {
			method: "POST",
			headers: { "Content-Type": "application/json", Accept: "application/json" },
			body: JSON.stringify({
				...billDetail,
				NgayXuatHang: billDetail.NgayXuatHang,
			}),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error("Network response was not ok.");
			})
			.then((data) => {
				console.log(data);
			})
			.catch((error) => {
				console.error("There was an error!", error);
			});
	},
};

export default billDetailAPI;
