import React, { ButtonHTMLAttributes } from 'react';




interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const Button: React.FC<CustomButtonProps> = ({
  children,
  variant = 'primary',
  ...props
}) => {
  const baseClasses = "font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";
  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-700 text-white"
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]}`}
      {...props}
    >
      {children}
    </button>
  );
};
