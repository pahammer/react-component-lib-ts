import ListBox from "./form/ListBox";

// entry, handleSelect, index

const entries = [{
    value: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    result: "November",
    type: "Month",
  }, {
    
  }]

export default function DatePicker(){

    return(
        <div className="w-full">
            <ListBox entry={entries[0]} handleSelect={(x) => console.log(x)} index="0" />
        </div>
    )
}