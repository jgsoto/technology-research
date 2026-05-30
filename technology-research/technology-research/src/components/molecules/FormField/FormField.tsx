import React, { useId } from "react";
import { Input } from "../../atoms/Input/Input";
import { Label } from "../../atoms/Label/Label";
import { ErrorMessage } from "../../atoms/ErrorMessage/ErrorMessage";

interface FormFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
  inputRef?: React.Ref<HTMLInputElement>;
}

export const FormField = ({
  label,
  error,
  required = false,
  inputProps = {},
  inputRef,
}: FormFieldProps) => {
  const uid = useId();
  const inputId = `${uid}-input`;
  const errorId = `${uid}-error`;

  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={inputId} required={required}>
        {label}
      </Label>

      <Input
        id={inputId}
        ref={inputRef}
        hasError={!!error}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={!!error}
        {...inputProps}
      />

      <ErrorMessage id={errorId} message={error} />
    </div>
  );
};
