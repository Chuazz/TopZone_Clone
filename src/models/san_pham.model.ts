class san_pham {
	ID_SP!: number;
	ID_DMSP!: number;
	Ten_SP!: string;
	Gia_SP!: number;
	SoLuong_SP!: number;

	init(ID_SP: number, ID_DMSP: number, Ten_SP: string, Gia_SP: number, SoLuong_SP: number) {
		this.ID_SP = ID_SP;
		this.ID_DMSP = ID_DMSP;
		this.Ten_SP = Ten_SP;
		this.Gia_SP = Gia_SP;
		this.SoLuong_SP = SoLuong_SP;
	}
}

export default san_pham;
