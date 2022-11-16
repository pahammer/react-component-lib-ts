import React, { useEffect, useState } from "react";

// components
import TimeDisplay from "../components/TimeDisplay";
import Slider from "../components/form/Slider";
import CurrentTimeButton from "../components/form/CurrentTimeButton";

// helper functions
import { getTime } from "../utils/getTime";

export default function TimePicker() {
	const [hour, setHour] = useState("3");
	const [minute, setMinute] = useState("45");
	const [meridiem, setMeridiem] = useState("PM");

	const setCurrentTime = () => {
		const { hours, minutes, meridiem } = getTime();
		setHour(hours);
		setMeridiem(meridiem);
		minutes.length < 2 ? setMinute("0" + minutes) : setMinute(minutes);
	};

	const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setHour(e.target.value);
	};

	const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		e.target.value.length < 2
			? setMinute("0" + e.target.value)
			: setMinute(e.target.value);
	};

	useEffect(() => {
		setCurrentTime();
	}, []);

	return (
		<div className="flex flex-col space-y-3 w-full items-center">
			<div className="flex space-x-2 w-full justify-center items-center ">
				<TimeDisplay
					hour={hour}
					minute={minute}
					activeMeridiemComponent={meridiem}
					handleUpdatedMeridiem={(newlySelectedMeridiem: string) =>
						setMeridiem(newlySelectedMeridiem)
					}
				/>
				<CurrentTimeButton onClick={setCurrentTime} />
			</div>

			<Slider
				start="1"
				end="12"
				step="1"
				title="hour"
				handleInputChange={handleHourChange}
				currentVal={hour}
			/>
			<Slider
				start="00"
				end="59"
				step="1"
				title="minute"
				handleInputChange={handleMinuteChange}
				currentVal={minute}
			/>
		</div>
	);
}
