import React from "react";
import { useController } from "react-hook-form";

const InputHook = ({ control, name = "", type = "text", ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <input
      className="p-4 transition-all bg-white border border-gray-100 rounded-lg outline-none focus:border-blue-500"
      {...field}
      id={name}
      type={type}
      // control = onChange + value
      {...props}
    />
  );
};

export default InputHook;
