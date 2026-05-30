import React from "react";

type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
  children: React.ReactNode;
  required?: boolean;
};

export const Label = ({
  children,
  required,
  className = "",
  ...props
}: LabelProps) => (
  <label
    {...props}
    className={`block text-sm font-medium text-slate-700 ${className}`}
  >
    {children}
    {required && (
      <span className="ml-1 text-red-500" aria-hidden="true">
        *
      </span>
    )}
  </label>
);
