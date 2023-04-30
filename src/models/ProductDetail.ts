import anh from '@models/anh.model';
import binh_luan from '@models/binh_luan.model';
import dung_luong from '@models/dung_luong.model';
import thong_tin_san_pham from '@models/thong_tin_san_pham.model';

class Productdetail {
	ID_SP!: number;
	ID_DMSP!: number;
	Ten_SP!: string;
	Gia_SP!: number;
	SoLuong_SP!: number;
	anhs!: anh[];
	dung_luongs!: dung_luong[];
	binh_luans!: binh_luan[];
	thong_tin_san_phams!: thong_tin_san_pham[];

	init(
		ID_SP: number,
		ID_DMSP: number,
		Ten_SP: string,
		Gia_SP: number,
		SoLuong_SP: number,
		anhs: anh[],
		dung_luongs: dung_luong[],
		binh_luans: binh_luan[],
		thong_tin_san_phams: thong_tin_san_pham[],
	) {
		this.ID_SP = ID_SP;
		this.ID_DMSP = ID_DMSP;
		this.Ten_SP = Ten_SP;
		this.Gia_SP = Gia_SP;
		this.SoLuong_SP = SoLuong_SP;
		this.anhs = anhs;
		this.dung_luongs = dung_luongs;
		this.binh_luans = binh_luans;
		this.thong_tin_san_phams = thong_tin_san_phams;
	}
}

export default Productdetail;
