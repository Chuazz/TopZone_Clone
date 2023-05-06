import phieu_xuat from '@models/phieu_xuat.model';

const VITE_API = import.meta.env.VITE_API;

const billAPI = {
	add: (bill: phieu_xuat) => {
		fetch(`${VITE_API}/phieu-xuat`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
			body: JSON.stringify(bill),
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

export default billAPI;
