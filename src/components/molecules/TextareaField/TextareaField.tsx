import React, { useId } from "react";
import { Textarea } from "../../atoms/Textarea/Textarea";
import { Label } from "../../atoms/Label/Label";
import { ErrorMessage } from "../../atoms/ErrorMessage/ErrorMessage";

interface TextareaFieldProps {
  label: string;
  error?: string;
  required?: boolean;
  textareaProps?: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
  textareaRef?: React.Ref<HTMLTextAreaElement>;
}

export const TextareaField = ({
  label,
  error,
  required = false,
  textareaProps = {},
  textareaRef,
}: TextareaFieldProps) => {
  const uid = useId();
  const inputId = `${uid}-textarea`;
  const errorId = `${uid}-error`;

  return (
    <div className="flex flex-col gap-1">
      <Label htmlFor={inputId} required={required}>
        {label}
      </Label>

      <Textarea
        id={inputId}
        ref={textareaRef}
        hasError={!!error}
        aria-describedby={error ? errorId : undefined}
        aria-invalid={!!error}
        rows={3}
        {...textareaProps}
      />

      <ErrorMessage id={errorId} message={error} />
    </div>
  );
};
