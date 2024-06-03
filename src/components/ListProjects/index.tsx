import Container from "../../components/Container";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaCss3, FaHtml5, FaReact, FaSass } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { useTheme } from "../../Contexts/ThemeContext";
import { projects } from "../../data/projects";
import Project from "../ItemProject";

export default function ListProjects() {
  const { theme } = useTheme();

  const iconComponents: any = {
    javascript: <IoLogoJavascript size={40} color="#F7DF1E" />,
    firebase: <IoLogoFirebase size={40} color="#FFCA28" />,
    typescript: <SiTypescript size={40} color="#007ACC" />,
    css: <FaCss3 size={40} color="#1572B6" />,
    html: <FaHtml5 size={40} color="#E34F26" />,
    react: <FaReact size={40} color="#61DAFB" />,
    nextjs: <RiNextjsFill size={40} color="#000000" />,
    tailwind: <RiTailwindCssFill size={40} color="#38B2AC" />,
    sass: <FaSass  size={40} color="#cc10ad" />,
  };

  const isChangedTheme = theme === "light" ? "bg-white" : "bg-slate-900";
  return (
    <Container>
      <ul className="grid gap-5 md:grid-cols-3">
        {projects.map((item, index) => (
          <Project
            key={index}
            link={item.link}
            thumb={item.thumb}
            title={item.title}
            className={`${isChangedTheme}`}
            alt={item.title}
            languages={item.languages.map((lang) => iconComponents[lang])}
          />
        ))}
        <li
          className={`${isChangedTheme} rounded-md flex justify-center items-center  p-5 space-y-5`}
        >
          <h1 className="font-bold text-3xl text-gray-600">
            + Projetos em breve
          </h1>
        </li>
      </ul>
    </Container>
  );
}
