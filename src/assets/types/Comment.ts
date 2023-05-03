import khach_hang from '@models/khach_hang.model';

type Comment = {
	ID_BL: number;
	ID_SP: number;
	ID_KH: number;
	NoiDung: string;
	Ngay_BL: Date;
	khach_hang: khach_hang;
};

export default Comment;
