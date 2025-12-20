import React from "react";
import { MultiSelect } from "primereact/multiselect";

interface CommonSelectProps {
  value: any;
  options: { label: string; value: any }[];
  placeholder?: string;
  onChange: (e: { value: any }) => void;
  className?: string;
  disabled?: boolean;
  filter?: boolean;
}

const MultiSelectProps: React.FC<CommonSelectProps> = ({
  value,
  options,
  placeholder = "Select",
  onChange,

}) => {
  console.log("values", value);
  return (
    <MultiSelect
      value={value}
      onChange={onChange}
      options={options}
      placeholder={placeholder}
      maxSelectedLabels={3}
    />
  );
};
export default MultiSelectProps;
