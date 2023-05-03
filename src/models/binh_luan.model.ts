import khach_hang from './khach_hang.model';

class binh_luan {
	ID_BL!: number;
	ID_SP!: number;
	ID_KH!: number;
	NoiDung!: string;
	Ngay_BL!: Date;
	khach_hang!: khach_hang;

	init(ID_BL: number, ID_SP: number, ID_KH: number, NoiDung: string, Ngay_BL: Date, khach_hang: khach_hang) {
		this.ID_BL = ID_BL;
		this.ID_SP = ID_SP;
		this.ID_KH = ID_KH;
		this.NoiDung = NoiDung;
		this.Ngay_BL = Ngay_BL;
		this.khach_hang = khach_hang;
	}
}

export default binh_luan;
