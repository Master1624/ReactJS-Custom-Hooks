import { useState, useEffect } from "react";

// To create your own hook, the beginning of the func name should ALWAYS start with use
const useCounter = () => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCounter((prevCounter) => prevCounter + 1);
		}, 1000);

		return () => clearInterval(interval);
	}, []);

	return counter;
};

export default useCounter;
