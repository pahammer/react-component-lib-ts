import React, { useEffect, useState } from "react";

// helper functions
const getTime = () => {
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

// form child components

function TimePicker() {
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

	// useEffect(() => {
	// 	setCurrentTime();
	// }, []);

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

type SliderProps = {
	start: string;
	end: string;
	step: string;
	title: string;
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	currentVal: string;
};

function Slider({
	start,
	end,
	step,
	title,
	handleInputChange,
	currentVal,
}: SliderProps) {
	return (
		<div className="relative w-full flex justify-center py-2">
			<div className="absolute top-5 text-purple-300 uppercase font-bold text-sm">
				{title}
			</div>
			<input
				type="range"
				min={start}
				max={end}
				step={step}
				value={currentVal}
				onChange={handleInputChange}
			/>
		</div>
	);
}

type CurrentTimeButtonProps = {
	onClick: () => void;
};
function CurrentTimeButton({ onClick }: CurrentTimeButtonProps) {
	return (
		<div
			onClick={onClick}
			className="flex flex-row h-fit justify-evenly items-center p-2 cursor-pointer bg-gray-200 rounded-lg shadow-md text-gray-500"
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth={1}
				stroke="currentColor"
				className="w-6 h-6"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
				/>
			</svg>
		</div>
	);
}

type TimeDisplayProps = {
	hour: string;
	minute: string;
	activeMeridiemComponent: string;
	handleUpdatedMeridiem: (props: string) => void;
};
// form dummy components
function TimeDisplay({
	hour,
	minute,
	activeMeridiemComponent,
	handleUpdatedMeridiem,
}: TimeDisplayProps) {
	return (
		<div className="flex flex-row justify-evenly items-center p-1 w-3/5 bg-gray-200 rounded-lg shadow-md text-gray-400">
			<div className="flex flex-row">
				<div className="flex">
					<TimeDisplayText timeComponent={true} text={hour} />
					<p className="text-xl">:</p>
				</div>
				<TimeDisplayText timeComponent={true} text={minute} />
			</div>
			<div className="flex flex-col space-y-[-3px]">
				<TimeDisplayText
					handleSelectedMeridiem={() => handleUpdatedMeridiem("AM")}
					timeComponent={false}
					text="AM"
					activeComponent={activeMeridiemComponent}
				/>
				<TimeDisplayText
					handleSelectedMeridiem={() => handleUpdatedMeridiem("PM")}
					timeComponent={false}
					text="PM"
					activeComponent={activeMeridiemComponent}
				/>
			</div>
		</div>
	);
}

type TimeDisplayTextProps = {
	text: string;
	activeComponent?: string;
	timeComponent: boolean;
	handleSelectedMeridiem?: () => void;
};

function TimeDisplayText({
	text,
	activeComponent,
	timeComponent,
	handleSelectedMeridiem,
}: TimeDisplayTextProps) {
	return (
		<>
			{timeComponent ? (
				<p className="text-xl">{text}</p>
			) : (
				<p
					className={`cursor-pointer ${
						activeComponent === `${text}` ? "text-gray-600" : ""
					}`}
					onClick={handleSelectedMeridiem}
				>
					{text}
				</p>
			)}
		</>
	);
}

type FormTitleProps = {
	title: string;
};

// general components
function FormTitle({ title }: FormTitleProps) {
	return (
		<div className="flex w-full items-start px-1 py-4">
			<p className="text-sm text-purple-700 font-light">{title}</p>
		</div>
	);
}
