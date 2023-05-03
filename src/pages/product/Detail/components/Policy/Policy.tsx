import { Image } from '@components/util/Image';
import { download, phone, repeat, shield, truck } from '@assets/image/Layout/Product';

const Policy = () => {
	return (
		<div>
			<div className="row ali-start p-t-4 p-b-8">
				<Image className="m-r-12" size={26} src={download} />
				<p className="flex-1 t-white">
					Bộ sản phẩm gồm: Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning - Type C
				</p>
			</div>
			<div className="row ali-start p-t-4 p-b-8">
				<Image className="m-r-12" size={28} src={repeat} />
				<p className="flex-1 t-white">
					Hư gì đổi nấy 12 tháng tại 3485 siêu thị trên toàn quốc Xem chi tiết chính sách bảo hành, đổi trả
				</p>
			</div>
			<div className="row ali-start p-t-4 p-b-8">
				<Image className="m-r-12" size={28} src={shield} />
				<p className="flex-1 t-white">Bảo hành chính hãng 1 năm</p>
			</div>
			<div className="row ali-start p-t-4 p-b-8">
				<Image className="m-r-12" size={28} src={truck} />
				<p className="flex-1 t-white">Giao hàng nhanh toàn quốc Xem chi tiết</p>
			</div>
			<div className="row ali-start p-t-4 p-b-8">
				<Image className="m-r-12" size={28} src={phone} />
				<p className="flex-1 t-white">Tổng đài: 1900.9696.42 (9h00 - 21h00 mỗi ngày)</p>
			</div>
		</div>
	);
};

export default Policy;
