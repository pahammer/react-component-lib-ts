import React, { useRef, useState } from "react";

// hooks
import useEditableComponent from "../hooks/useEditableComponent";

export default function Name() {
	const [name, setName] = useState("pam");

	const handleSave = (value: string) => {
		setName(value);
		setIsEditable(false);
	};

	const divRef = useRef<HTMLDivElement>(null);
	const { isEditable, setIsEditable } = useEditableComponent(divRef);

	return (
		<div ref={divRef} className="w-full flex justify-center">
			{isEditable ? (
				<EditableNameComponent name={name} handleSave={handleSave} />
			) : (
				<NameComponent name={name} />
			)}
		</div>
	);
}

type NameComponentProps = {
	name: string;
};

function NameComponent({ name }: NameComponentProps) {
	return (
		<div className="w-3/4 px-2 h-10 flex items-center justify-center rounded-md font-light bg-gray-100 overflow-hidden cursor-pointer hover:bg-gray-200">
			{name}
		</div>
	);
}

type EditableNameComponentProps = {
	name: string;
	handleSave: (props: string) => void;
};

function EditableNameComponent({
	name,
	handleSave,
}: EditableNameComponentProps) {
	const [tempName, setTempName] = useState(name);
	return (
		<div className="flex flex-row justify-center">
			<input
				autoFocus
				className="w-3/4 h-10 bg-gray-200 text-center"
				value={tempName}
				type="text"
				onChange={(e) => setTempName(e.target.value)}
			/>
			<button
				onClick={() => handleSave(tempName)}
				className="h-10 bg-green-700/25 rounded-sm p-1"
			>
				{CheckMarkComponent}
			</button>
		</div>
	);
}

// HeroIcons
const CheckMarkComponent = (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
		strokeWidth={2}
		stroke="currentColor"
		className="w-6 h-6"
	>
		<path
			strokeLinecap="round"
			strokeLinejoin="round"
			d="M4.5 12.75l6 6 9-13.5"
		/>
	</svg>
);
