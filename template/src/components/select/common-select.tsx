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
  editable?: boolean;
  appendTo?: "self" | HTMLElement | (() => HTMLElement) | null | undefined;
}

const CommonSelect: React.FC<CommonSelectProps> = ({
  value,
  options,
  placeholder = "Select",
  onChange,
  className = "",
  disabled = false,
  filter = true,
  editable = false,
  appendTo = "self",
}) => {
  console.log("CommonSelect options:", options);
  console.log("CommonSelect value:", value);
  return (
    <Dropdown
      value={value}
      options={Array.isArray(options) ? options : []}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      disabled={disabled}
      appendTo={appendTo}
      filter={filter}
      editable={editable}
    />
  );
};

export default CommonSelect;
