import { useEffect, useState } from "react";

const useDebounce = (value: any, delay: number) => {
	const [debouceValue, setDebounceValue] = useState(value);

	useEffect(() => {
		const timeOutId = setTimeout(() => {
			setDebounceValue(value);
		}, delay);

		return () => clearTimeout(timeOutId);
	}, [value]);

	return debouceValue;
};

export default useDebounce;
