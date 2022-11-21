import React from "react";

// components
import FormTitle from "../components/form/FormTitle";
import TimePicker from "../components/TimePicker";
import Name from "../components/Name";
import SmallBoxOptions from "../components/SmallBoxOptions";
import GeneralSlider from "../components/GeneralSlider";
export default function Home() {
	
	const entry = {
        component: "list",
        value: ["blank", "whiskey"],
        result: "blank",
        type: "Template",
      }

	const initials = ["ph", "sm", "nh"];
	return (
		<div className="absolute inset-0 flex flex-col justify-center items-center">
			<div className="flex flex-col items-center w-64 h-fit bg-white shadow-lg rounded-lg py-2 pb-10 overflow-y-scroll">
				<FormTitle title="Time Started" />
				<TimePicker />
				<FormTitle title="Name" />
				<Name />
				<FormTitle title="Initials" />
				<SmallBoxOptions initialsArray={initials} />
				<FormTitle title="pH" />
				<GeneralSlider initialVal="4.3" start="4.0" end="5.0" step=".1" title="pH" />
				<FormTitle title="temp" />
				<GeneralSlider initialVal="30" start="0" end="100" step="1" title="Temp" />
			</div>
		</div>
	);
}
