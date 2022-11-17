import React, { useRef } from "react";

// components
import FormTitle from "../components/form/FormTitle";
import TimePicker from "../components/TimePicker";
import Name from "../components/Name";

export default function Home() {
	return (
		<div className="absolute inset-0 flex flex-col justify-center items-center">
			<div className="flex flex-col w-64 h-96 bg-white shadow-lg rounded-lg py-2">
				<FormTitle title="Time Started" />
				<TimePicker />
				<FormTitle title="Name" />
				<Name />
			</div>
		</div>
	);
}
