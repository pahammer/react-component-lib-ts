import React, { useState, useEffect } from "react";

export default function useEditableComponent(elRef) {
	const [isEditable, setIsEditable] = useState(false);

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (!elRef?.current?.contains(e.target)) {
				setIsEditable(false);
			} else {
				setIsEditable(true);
			}
		};

		document.addEventListener("click", handleClickOutside, true);

		return () => {
			document.removeEventListener("click", handleClickOutside, true);
		};
	}, [elRef]);

	return { isEditable, setIsEditable };
}
