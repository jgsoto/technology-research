import React from "react";

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  hasError?: boolean;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ hasError = false, className = "", ...props }, ref) => {
    const baseClasses =
      "w-full rounded-md border px-3 py-2 text-sm shadow-sm transition-colors focus:outline-none focus:ring-2 resize-y";
    const stateClasses = hasError
      ? "border-red-400 focus:border-red-500 focus:ring-red-300"
      : "border-slate-300 focus:border-blue-500 focus:ring-blue-200";

    return (
      <textarea
        ref={ref}
        {...props}
        className={`${baseClasses} ${stateClasses} ${className}`}
      />
    );
  }
);

Textarea.displayName = "Textarea";
