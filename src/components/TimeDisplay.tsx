type TimeDisplayProps = {
	hour: string;
	minute: string;
	activeMeridiemComponent: string;
	handleUpdatedMeridiem: (props: string) => void;
};

export default function TimeDisplay({
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
