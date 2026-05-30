
interface ErrorMessageProps {
  id?: string;
  message?: string;
}

export const ErrorMessage = ({ id, message }: ErrorMessageProps) => {
  if (!message) return null;

  return (
    <p id={id} role="alert" className="mt-1 text-xs text-red-600">
      {message}
    </p>
  );
};
