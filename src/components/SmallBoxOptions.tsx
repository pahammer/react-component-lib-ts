import React, { useState } from "react";

type SmallBoxOptionsProps = {
	initialsArray: string[];
};

export default function SmallBoxOptions({
	initialsArray,
}: SmallBoxOptionsProps) {
	const [selectedBoxIdx, setSelectedBoxIdx] = useState(0);

	return (
		<div className="w-3/4 flex justify-start items-center space-x-1">
			{initialsArray.map((initials, initialsIdx) => (
				<SmallBoxOption
					key={initialsIdx}
					isSelected={initialsIdx === selectedBoxIdx}
					handleSelected={() => setSelectedBoxIdx(initialsIdx)}
				>
					{initials}
				</SmallBoxOption>
			))}
		</div>
	);
}

type SmallBoxOptionProps = {
	children: React.ReactNode;
	isSelected: boolean;
	handleSelected: () => void;
};

function SmallBoxOption({
	children,
	isSelected,
	handleSelected,
}: SmallBoxOptionProps) {
	return (
		<div
			className={`rounded-md shadow-sm h-10 w-10 flex justify-center items-center cursor-pointer p-1 ${
				isSelected ? "bg-gray-300" : "bg-gray-100 "
			}`}
			onClick={handleSelected}
		>
			{children}
		</div>
	);
}
