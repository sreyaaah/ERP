import React from "react";
import { Dropdown } from "primereact/dropdown";

interface CommonSelectProps {
  value: any;
  options: { label: string; value: any }[];
  placeholder?: string;
  onChange: (e: { value: any }) => void;
  className?: string;
  disabled?: boolean;
  filter?: boolean;
}

const CommonSelect: React.FC<CommonSelectProps> = ({
  value,
  options,
  placeholder = "Select",
  onChange,
  className = "",
  disabled = false,
  filter = true,
}) => {
  console.log("values", value);
  return (
    <Dropdown
      value={value}
      options={Array.isArray(options) ? options : []}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      disabled={disabled}
      appendTo={"self"}
      filter={filter}
    />
  );
};

export default CommonSelect;
