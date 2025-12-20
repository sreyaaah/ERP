import React from 'react';
import { Chips } from 'primereact/chips';

interface CommonChipsInputProps {
  value: string[];
  onChange: (value: string[]) => void;
  label?: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  className?: string;
}

const CommonChipsInput: React.FC<CommonChipsInputProps> = ({
  value,
  onChange,

  placeholder = 'Type and enter',
 
  className,
}) => {
  return (
    <Chips
      className={className}
      value={value}
      onChange={(e: any) => onChange(e.value)}
      placeholder={placeholder}
    />
  );
};

export default CommonChipsInput;
