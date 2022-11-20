import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";

export default function ListBox({ entry, handleSelect, index }) {
  return (
    <div className="w-full">
      <Listbox
        value={entry.result}
        onChange={(e) => handleSelect(entry.type, e, index)}
      >
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-pointer rounded-lg bg-white py-2 pl-3 text-left capitalize shadow-md focus:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-purple-300 text-sm">
            <span className="block truncate">{entry.result}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 15L12 18.75 15.75 15m-7.5-6L12 5.25 15.75 9"
                />
              </svg>
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="ring-black  overflow-auto mt-1 max-h-40 w-full rounded-md bg-white py-1 text-base capitalize shadow-lg ring-1 ring-opacity-5 focus:outline-none text-sm">
              {entry.value.map((val, valX) => (
                <Listbox.Option
                  key={valX}
                  className={({ active }) =>
                    `relative cursor-pointer select-none py-2 pl-3 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={val}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {val}
                      </span>
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
