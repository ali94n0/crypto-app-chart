import { useEffect, useRef } from "react";

const useOutboxClick = (handler) => {
	const boxRef = useRef();

	useEffect(() => {
		const clickHandler = (e) => {
			if (boxRef.current && !boxRef.current.contains(e.target)) {
				handler();
			}
		};

		document.addEventListener("click", clickHandler, true);
		return () => {
			document.removeEventListener("click", clickHandler);
		};
	}, [boxRef]);

	return boxRef;
};

export default useOutboxClick;
