import { FiHome, FiUser } from "react-icons/fi";
import Container from "../Container";
import { GrProjects } from "react-icons/gr";
import { useTheme } from "../../Contexts/ThemeContext";
import { MdDarkMode, MdSunny } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Container>
      <header
        className={`${
          theme === "light" ? "bg-zinc-100" : "bg-slate-900 transition-colors"
        } shadow rounded-md p-5`}
      >
        <div className="flex flex-wrap flex-col items-center gap-4 md:flex-row md:items-center md:justify-between">
          <h1
            className={`font-bold text-2xl ${
              theme === "light" ? "text-slate-950" : "text-white"
            }`}
          >
            Dudu<span className="text-sky-600">Web</span>
          </h1>
          <nav>
            <ul
              className={`flex items-center gap-5 ${
                theme === "light" ? "text-slate-950" : "text-white"
              }`}
            >
              <li className="flex items-center gap-2 md:px-5 md:py-2 p-2 hover:transition-colors  cursor-pointer">
                <FiHome size={20} />
                <Link to={"/"} className="font-semibold md:text-xl text-xs">
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2 md:px-5 md:py-2 p-2 hover:transition-colors  cursor-pointer">
                <FiUser size={20} />
                <Link
                  to={"/about"}
                  className="font-semibold md:text-xl text-xs"
                >
                  Sobre
                </Link>
              </li>
              <li className="flex items-center gap-2 md:px-5 md:py-2 hover:transition-colors  cursor-pointer">
                <GrProjects size={20} />
                <Link
                  to={"/projects"}
                  className="font-semibold md:text-xl text-xs"
                >
                  Projetos
                </Link>
              </li>
              <li>
                {theme === "light" ? (
                  <MdDarkMode
                    className="cursor-pointer"
                    onClick={toggleTheme}
                    size={30}
                  />
                ) : (
                  <MdSunny
                    className="cursor-pointer"
                    size={30}
                    onClick={toggleTheme}
                  />
                )}
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </Container>
  );
}
