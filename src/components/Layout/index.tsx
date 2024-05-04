import { Outlet } from "react-router-dom";
import Header from "../Header";
import { useTheme } from "../../Contexts/ThemeContext";

export default function Layout() {
  const { theme } = useTheme();
  return (
    <div
      className={`${
        theme === "light" ? "bg-zinc-200" : "bg-slate-800"
      } h-screen`}
    >
      <Header />
      <Outlet />
    </div>
  );
}
