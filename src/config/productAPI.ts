const env = import.meta.env.VITE_PRODUCT_API;

type APIProps = {
	sort?: string;
	name?: string;
	page?: number;
	type?: number;
	perPage?: number;
};

const productAPI = {
	product_list: ({ sort = 'asc', name = '', page = 1, perPage = 6, type = 1 }: APIProps) =>
		`${env}/san-pham?sort={"Gia_SP":"${sort}"}&filter={"Ten_SP":"${name}", "ID_DMSP": ${type}}&&perPage=${perPage}&page=${page}`,
};

export default productAPI;
