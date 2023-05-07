const env = import.meta.env.VITE_API;

type APIProps = {
	sort?: string;
	id?: number;
	name?: string | null;
	page?: number;
	type?: number;
	perPage?: number;
};

const importInvoiceAPI = {
	search: ({ sort = "desc", name = "", page = 1, perPage = 6 }: APIProps) =>
		`${env}/phieu-nhap?sort={"NgayNhap":"${sort}"}&filter={"NgayNhap":"${name}"}&perPage=${perPage}&page=${page}`,

	byId: (id: number) => `${env}/phieu-nhap/${id}`,
};

export default importInvoiceAPI;
