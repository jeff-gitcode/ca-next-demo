import { useFormContext } from "react-hook-form";
import { DynamicFieldData } from "./dynamic-field-data";

export const DynamicControl = ({
  inputType,
  fieldName,
  defaultValue,
  options = [],
  config = {}
}: DynamicFieldData) => {
  const { register } = useFormContext();

  switch (inputType) {
    case "text":
      return (
        <input className="border-solid border-gray-300 border py-2 px-4 w-full
        rounded text-gray-700"
          type="text"
          {...register(fieldName, config)}
          defaultValue={defaultValue}
        />
      );
    case "select": {
      return (
        <select
          {...register(fieldName, config)}
          defaultValue={defaultValue}
          name={fieldName}
          id={fieldName}
        >
          {options.map((o, index) => (
            <option key={index} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      );
    }
    case "number":
      return (
        <input
          type="number"
          {...register(fieldName, config)}
          defaultValue={defaultValue}
        />
      );
    default:
      return <input className="border-solid border-gray-300 border py-2 px-4 w-full
      rounded text-gray-700" type="text" />;
  }
};
