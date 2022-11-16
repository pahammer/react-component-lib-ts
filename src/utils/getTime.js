export const getTime = () => {
	// return current hour, minute, and meridiem as string values
	const date = new Date();
	return {
		hours: String(
			date.getHours() > 12 ? date.getHours() - 12 : date.getHours()
		),
		minutes: String(date.getMinutes()),
		meridiem: String(date.getHours() >= 12 ? "PM" : "AM"),
	};
};
