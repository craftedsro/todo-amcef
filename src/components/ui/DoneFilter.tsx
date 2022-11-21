import React, { useState } from "react";
import { DoneFilterOptionsType, FilterPropsType, StringType } from "../types";
import { FilterDoneEnumType } from "../../enums";

const options: DoneFilterOptionsType = [
  { value: "default", label: "Select Done filter" },
  { value: "done", label: "Done" },
  { value: "notDone", label: "Not Done" },
];

const DoneFilter = ({ onChange }: FilterPropsType) => {
  const [selectedOption, setSelectedOption] = useState<FilterDoneEnumType>(
    options[0].value
  );

  const onChangeHandler = (optionValue: StringType) => {
    const optionEnum = optionValue as FilterDoneEnumType;

    setSelectedOption(optionEnum);

    onChange(optionEnum);
  };

  return (
    <div className="flex w-1/2">
      <select
        value={selectedOption}
        className="select select-bordered w-full max-w-xs"
        onChange={(e) => onChangeHandler(e.target.value)}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DoneFilter;
