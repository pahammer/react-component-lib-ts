type SliderProps = {
	start: string;
	end: string;
	step: string;
	title: string;
	handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	currentVal: string;
};

export default function Slider({
	start,
	end,
	step,
	title,
	handleInputChange,
	currentVal,
}: SliderProps) {
	return (
		<div className="relative w-full flex justify-center">
			<div className="absolute top-[9px] text-violet-300 uppercase font-bold text-sm">
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
