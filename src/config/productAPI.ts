const env = import.meta.env.VITE_PRODUCT_API;

type APIProps = {
	sort?: string;
	name?: string;
	page?: number;
	type?: number;
};

const productAPI = {
	product_list: ({ sort = 'asc', name = '', page = 1, type = 1 }: APIProps) =>
		`${env}/san-pham?sort={"Gia_SP":"${sort}"}&filter={"Ten_SP":"${name}", "ID_DMSP": ${type}}&page=${page}`,
};

export default productAPI;
