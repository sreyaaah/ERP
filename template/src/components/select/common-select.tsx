import React, { useMemo } from "react";
import { Dropdown } from "primereact/dropdown";

interface CommonSelectProps {
  value: any;
  options: any[];
  placeholder?: string;
  onChange: (e: { value: any }) => void;
  className?: string;
  disabled?: boolean;
  filter?: boolean;
  editable?: boolean;
  appendTo?: "self" | HTMLElement | (() => HTMLElement) | null | undefined;
  optionLabel?: string;
  optionValue?: string;
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
  optionLabel = "label",
  optionValue = "value",
}) => {
  // Memoize the sanitized options to prevent unnecessary re-computations
  const safeOptions = useMemo(() => {
    if (!Array.isArray(options)) return [];

    // Deduplicate and ensure no bad data breaks the dropdown
    const seen = new Set();
    return options.filter((opt) => {
      // Robustly handle both objects and primitives
      const val = (typeof opt === "object" && opt !== null) ? opt[optionValue] : opt;
      if (val === undefined || seen.has(val)) return false;
      seen.add(val);
      return true;
    });
  }, [options, optionValue]);

  return (
    <Dropdown
      value={value}
      options={safeOptions}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      disabled={disabled}
      filter={filter}
      editable={editable}
      appendTo={appendTo}
      optionLabel={typeof (options?.[0]) === 'object' ? optionLabel : undefined}
      optionValue={typeof (options?.[0]) === 'object' ? optionValue : undefined}
    />
  );
};

export default CommonSelect;
