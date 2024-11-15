interface Props {
  label: string;
  id: string;
  type: string;
  error?: any;
  defaultValue?: string;
}
const InputField = ({ label, id, type, error, defaultValue }: Props) => (
  <div className="flex flex-col gap-2">
    <label className="text-sm text-gray-700" htmlFor={id}>
      {label}
    </label>
    <input
      className="rounded-md p-4 ring-2 ring-gray-300"
      defaultValue={defaultValue}
      id={id}
      name={id}
      placeholder={`Enter your ${label.toLowerCase()}`}
      type={type}
    />
    {error && <div className="text-red-600">{error}</div>}
  </div>
);

export default InputField;
