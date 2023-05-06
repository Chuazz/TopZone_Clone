class phieu_xuat {
	ID_PX!: number;
	ID_NV!: number;
	ID_KH!: number;
	NgayDatHang!: string;
	TongTien_PX!: number;
	TinhTrang_PX!: number;

	constructor() {}

	init(ID_PX: number, ID_NV: number, ID_KH: number, NgayDatHang: string, TongTien_PX: number, TinhTrang_PX: number) {
		this.ID_PX = ID_PX;
		this.ID_NV = ID_NV;
		this.ID_KH = ID_KH;
		this.NgayDatHang = NgayDatHang;
		this.TongTien_PX = TongTien_PX;
		this.TinhTrang_PX = TinhTrang_PX;
	}
}

export default phieu_xuat;
