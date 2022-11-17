import React from "react";

// components
import FormTitle from "../components/form/FormTitle";
import TimePicker from "../components/TimePicker";
import Name from "../components/Name";
import SmallBoxOptions from "../components/SmallBoxOptions";

export default function Home() {
	const initials = ["ph", "sm", "nh"];
	return (
		<div className="absolute inset-0 flex flex-col justify-center items-center">
			<div className="flex flex-col items-center w-64 h-fit bg-white shadow-lg rounded-lg py-2">
				<FormTitle title="Time Started" />
				<TimePicker />
				<FormTitle title="Name" />
				<Name />
				<FormTitle title="Initials" />
				<SmallBoxOptions initialsArray={initials} />
			</div>
		</div>
	);
}
