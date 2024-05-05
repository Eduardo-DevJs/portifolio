import { ComponentProps } from "react";
import { useTheme } from "../../Contexts/ThemeContext";

type Textarea = ComponentProps<"textarea">;

export default function TextArea({ placeholder }: Textarea) {
  const { theme } = useTheme();
  const isChangedTheme =
    theme === "light"
      ? "bg-white"
      : "bg-transparent border border-slate-500 text-white";
  return (
    <textarea
      placeholder={placeholder}
      rows={10}
      className={`${isChangedTheme} resize-none outline-none shadow w-full p-3 text-base rounded-md`}
      name="message"
      id="msg"
    ></textarea>
  );
}
