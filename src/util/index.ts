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
};

export default util;
