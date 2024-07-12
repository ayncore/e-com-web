import React, { InputHTMLAttributes } from 'react';

interface CustomInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export const Input: React.FC<CustomInputProps> = ({ label, ...props }) => {
  return (
    <div className="w-full">
      {
        label &&
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.id}>

          {label}
        </label>
      }
      <input
        className="shadow appearance-none border rounded w-full  py-2 px-3 h-full text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...props}
      />
    </div>
  );
};
