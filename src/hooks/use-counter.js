import { useState, useEffect } from "react";

// To create your own hook, the beginning of the func name should ALWAYS start with use
const useCounter = (forwards = true) => {
	const [counter, setCounter] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			if (forwards) {
				setCounter((prevCounter) => prevCounter + 1);
			}
      else{
        setCounter((prevCounter) => prevCounter - 1);
      }
		}, 1000);

		return () => clearInterval(interval);
	}, [forwards]);

	return counter;
};

export default useCounter;
