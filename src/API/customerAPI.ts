const env = import.meta.env.VITE_API;

type APIProps = {
	sort?: string;
	id?: number;
	name?: string | null;
	page?: number;
	type?: number;
	perPage?: number;
};

const customerAPI = {
	search: ({ sort = "asc", name = "", page = 1, perPage = 6 }: APIProps) =>
		`${env}/khach-hang?sort={"Ten_KH":"${sort}"}&filter={"Ten_KH":"${name}"}&perPage=${perPage}&page=${page}`,

	byId: (id: number) => `${env}/khach-hang/${id}`,
};

export default customerAPI;
