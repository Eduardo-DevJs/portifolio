import { ComponentProps } from "react";
import { useTheme } from "../../Contexts/ThemeContext";

type InputProps = ComponentProps<"input">;

export default function Input({ name, type, placeholder }: InputProps) {
  const { theme } = useTheme();
  const isChangedTheme =
    theme === "light"
      ? "bg-white"
      : "bg-transparent border border-slate-500 text-white";
  return (
    <input
      placeholder={placeholder}
      className={` ${isChangedTheme} outline-none w-full shadow p-3 text-base rounded-md`}
      type={type}
      name={name}
      required
    />
  );
}
