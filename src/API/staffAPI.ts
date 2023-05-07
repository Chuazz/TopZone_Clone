const env = import.meta.env.VITE_API;

type APIProps = {
	sort?: string;
	id?: number;
	name?: string | null;
	page?: number;
	type?: number;
	perPage?: number;
};

const staffAPI = {
	search: ({ sort = "asc", name = "", page = 1, perPage = 6 }: APIProps) =>
		`${env}/nhan-vien?sort={"Ten_NV":"${sort}"}&filter={"Ten_NV":"${name}"}&perPage=${perPage}&page=${page}`,

	byId: (id: number) => `${env}/nhan-vien/${id}`,
};

export default staffAPI;
