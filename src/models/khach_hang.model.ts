class khach_hang {
	ID_KH!: number;
	Ten_KH!: string;
	SDT_KH!: string;
	DiaChi_KH!: string;
	Email!: string;
	GioiTinh_KH!: string;

	init(ID_KH: number, Ten_KH: string, SDT_KH: string, DiaChi_KH: string, Email: string, GioiTinh_KH: string) {
		this.ID_KH = ID_KH;
		this.Ten_KH = Ten_KH;
		this.SDT_KH = SDT_KH;
		this.DiaChi_KH = DiaChi_KH;
		this.Email = Email;
		this.GioiTinh_KH = GioiTinh_KH;
	}
}

export default khach_hang;
