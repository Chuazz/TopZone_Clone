const env = import.meta.env.VITE_API;

type APIProps = {
	sort?: string;
	id?: number;
	name?: string | null;
	page?: number;
	type?: number;
	perPage?: number;
};

const exportInvoiceAPI = {
	search: ({ sort = "desc", name = "", page = 1, perPage = 6 }: APIProps) =>
		`${env}/phieu-xuat?sort={"NgayDatHang":"${sort}"}&filter={"NgayDatHang":"${name}"}&perPage=${perPage}&page=${page}`,

	byId: (id: number) => `${env}/phieu-xuat/${id}`,
};

export default exportInvoiceAPI;
