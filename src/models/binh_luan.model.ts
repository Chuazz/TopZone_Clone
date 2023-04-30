class binh_luan {
	ID_BL!: number;
	ID_SP!: number;
	ID_KH!: number;
	NoiDung!: string;
	Ngay_BL!: Date;

	init(ID_BL: number, ID_SP: number, ID_KH: number, NoiDung: string, Ngay_BL: Date) {
		this.ID_BL = ID_BL;
		this.ID_SP = ID_SP;
		this.ID_KH = ID_KH;
		this.NoiDung = NoiDung;
		this.Ngay_BL = Ngay_BL;
	}
}

export default binh_luan;
