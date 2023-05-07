const env = import.meta.env.VITE_API;

type APIProps = {
	sort?: string;
	id?: number;
	name?: string | null;
	page?: number;
	type?: number;
	perPage?: number;
};

const supplierAPI = {
	search: ({ sort = "asc", name = "", page = 1, perPage = 6 }: APIProps) =>
		`${env}/nha-cung-cap?sort={"Ten_NCC":"${sort}"}&filter={"Ten_NCC":"${name}"}&perPage=${perPage}&page=${page}`,

	byId: (id: number) => `${env}/nha-cung-cap/${id}`,
};

export default supplierAPI;
