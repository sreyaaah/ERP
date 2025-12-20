import React from "react";
import { Calendar } from "primereact/calendar";

interface CommonDatePickerProps {
  value: Date | null;
  onChange: (e: Date | null) => void;
  placeholder?: string;
  showTime?: boolean;
  dateFormat?: string;
  className?: string;
  disabled?: boolean;
  maxDate?: any;
  minDate?: any;
  appendTo?: any,
}

interface CommonMonthPickerProps {
  value: Date | null;
  onChange: (e: Date | null) => void;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

const CommonDatePicker: React.FC<CommonDatePickerProps> = ({
  value,
  onChange,
  placeholder = "Select Date",
  dateFormat = "dd/mm/yy",
  className = "",
  disabled = false,
  maxDate,
  minDate,
  appendTo = "",
}) => {
  return (
    <Calendar
      value={value}
      onChange={(e) => onChange(e.value as Date)}
      placeholder={placeholder}
      dateFormat={dateFormat}
      className={className}
      disabled={disabled}
      maxDate={maxDate}
      minDate={minDate}
      appendTo={appendTo}
    />
  );
};

const CommonMonthPicker: React.FC<CommonMonthPickerProps> = ({
  value,
  onChange,
  placeholder = "Select Month",
  className = "",
  disabled = false,
}) => {
  return (
    <Calendar
      value={value}
      onChange={(e) => onChange(e.value as Date)}
      placeholder={placeholder}
      className={className}
      disabled={disabled}
      dateFormat="mm/yy"
      view="month"
      yearNavigator
      yearRange="2020:2030"
    />
  );
};

export default CommonDatePicker;
export { CommonMonthPicker };
