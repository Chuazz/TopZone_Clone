const util = {
	getParentElement: (element: HTMLElement, parentSelector: string): HTMLElement | undefined => {
		while (element.parentElement) {
			if (element.parentElement.matches(parentSelector)) {
				return element.parentElement;
			}
			element = element.parentElement;
		}
	},
	addCommas: (number: number): string => {
		return number.toLocaleString().replaceAll(',', '.');
	},
	getColor: (name: string): string => {
		switch (name) {
			case 'Đen':
				return '#403e3d';
			case 'Tím':
				return '#594f63';
			case 'Bạc':
				return '#f0f2f2';
			case 'Vàng':
				return '#4a4842';
			case 'Xám':
				return '#8c8c8b';
			default:
				break;
		}
		return '';
	},
};

export default util;
