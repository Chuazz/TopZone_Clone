class thong_tin_san_pham {
	ID_TTSP!: number;
	ID_SP!: number;
	ThongTin!: string;
	MoTa_SP!: string;

	init(ID_TTSP: number, ID_SP: number, ThongTin: string, MoTa_SP: string) {
		this.ID_TTSP = ID_TTSP;
		this.ID_SP = ID_SP;
		this.ThongTin = ThongTin;
		this.MoTa_SP = MoTa_SP;
	}
}

export default thong_tin_san_pham;
