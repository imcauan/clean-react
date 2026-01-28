interface FormInputProps extends React.ComponentProps<"input"> {
  label?: string;
  errorMessage?: string;
}

export function FormInput({ label, errorMessage, ...props }: FormInputProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={props.name} className="mb-1">
        {label}
      </label>
      <input
        {...props}
        className="border w-md border-primary leading-10 rounded-md pl-3"
      />
      {errorMessage && (
        <span className="text-red-600 mt-1">{errorMessage}</span>
      )}
    </div>
  );
}
