class chi_tiet_phieu_xuat {
	ID_PX!: number;
	ID_SP!: number;
	SoLuongXuat!: number;
	NgayXuatHang!: string;

	constructor() {}

	init(ID_PX: number, ID_SP: number, SoLuongXuat: number, NgayXuatHang: string) {
		this.ID_PX = ID_PX;
		this.ID_SP = ID_SP;
		this.SoLuongXuat = SoLuongXuat;
		this.NgayXuatHang = NgayXuatHang;
	}
}

export default chi_tiet_phieu_xuat;
