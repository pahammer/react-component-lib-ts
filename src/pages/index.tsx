import React from "react";

// components
import FormTitle from "../components/form/FormTitle";
import TimePicker from "../components/TimePicker";

export default function Home() {
	return (
		<div className="absolute inset-0 flex justify-center items-center">
			<div className="flex flex-col w-64 h-96 bg-white shadow-lg rounded-lg py-2">
				<FormTitle title="Time Started" />
				<TimePicker />
			</div>
		</div>
	);
}
