import React, {useState} from "react";
import Slider from "./form/Slider";

export default function GeneralSlider({initialVal, start, end, step, title }) {
    const [currentVal, setCurrentVal] = useState(initialVal)

    const handleValueChange = (e) => {
        setCurrentVal(e.target.value)
    }

    return (
        <div className="flex justify-center items-center w-full px-1">
            <div className="rounded-md shadow-sm bg-gray-200 h-10 w-10 flex justify-center items-center p-1">
                {currentVal}
            </div>
        <Slider
				start={start}
				end={end}
				step={step}
				title={title}
				handleInputChange={handleValueChange}
				currentVal={currentVal}
			/>
            </div>
    )
}