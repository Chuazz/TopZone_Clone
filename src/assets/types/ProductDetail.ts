import anh from '@models/anh.model';
import dung_luong from '@models/dung_luong.model';
import thong_tin_san_pham from '@models/thong_tin_san_pham.model';
import mac_sac from '../../models/mau_sac.model';
import Comment from './Comment';

type Productdetail = {
	ID_SP: number;
	ID_DMSP: number;
	Ten_SP: string;
	Gia_SP: number;
	SoLuong_SP: number;
	anhs: anh[];
	dung_luongs: dung_luong[];
	binh_luans: Comment[];
	thong_tin_san_phams: thong_tin_san_pham[];
	mau_sacs: mac_sac[];
	so_luong: number;
};

export default Productdetail;
