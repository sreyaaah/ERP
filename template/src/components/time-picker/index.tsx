import React, { useRef } from 'react';
import { Calendar } from 'primereact/calendar';

interface TimePickerProps {
  selectedTime: Date | null;
  onChange: (time: Date | null) => void;
  className?: string;
  minTime?: Date;
  disabled?: boolean;
}

const CommonTimePicker: React.FC<TimePickerProps> = ({
  selectedTime,
  onChange,
  className = 'datetimepicker',
  minTime,
  disabled = false,
}) => {
  const timerRef = useRef<Calendar>(null);

  return (
    <>
      <Calendar
        ref={timerRef}
        className={className}
        placeholder="Select time"
        value={selectedTime}
        onChange={(e:any) => onChange(e.value)}
        timeOnly
        disabled={disabled}
        minDate={minTime}
      />
    </>
  );
};

export default CommonTimePicker;
