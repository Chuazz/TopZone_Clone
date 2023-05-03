import binh_luan from '@models/binh_luan.model';
import { format } from 'date-fns';

const VITE_API = import.meta.env.VITE_API;

const commentAPI = {
	add: (binhLuan: binh_luan) => {
		let comment = {
			ID_SP: binhLuan.ID_SP,
			ID_KH: 1,
			NoiDung: binhLuan.NoiDung,
			Ngay_BL: format(new Date(), 'yyyy-MM-dd HH:mm:ss'),
		};

		fetch(`${VITE_API}/binh-luan`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
			body: JSON.stringify(comment),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}
				throw new Error('Network response was not ok.');
			})
			.then((data) => {})
			.catch((error) => {
				console.error('There was an error!', error);
			});
	},
};

export default commentAPI;
