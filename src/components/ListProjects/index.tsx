import Container from "../../components/Container";
import thumbComentarios from "../../assets/webComentarios.png";
import thumbNotas from "../../assets/webNotas.png";
import thumbPhotoPickerColor from "../../assets/webPhotoPickerColor.png";
import thumbCountries from "../../assets/webPaises.png";
import thumbArcodeon from "../../assets/webArcodeon.png";
import thumbImc from "../../assets/webIMC.png";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { useTheme } from "../../Contexts/ThemeContext";

export default function ListProjects() {
  const { theme } = useTheme();
  const isChangedTheme = theme === "light" ? "bg-white" : "bg-slate-900";
  return (
    <Container>
      <ul className="grid gap-5 md:grid-cols-3">
        <li
          className={`${isChangedTheme} rounded-md flex flex-col justify-between items-center p-5 space-y-5`}
        >
          <a
            className="hover:opacity-70"
            href="https://comentarios-chi.vercel.app/"
            target="_blank"
          >
            <img
              src={thumbComentarios}
              className="rounded-md"
              alt="Primeiro projeto"
            />
          </a>
          <h2 className="text-slate-500 font-bold text-2xl text-center">
            Sistema de comentarios
          </h2>
          <div className="flex items-center justify-around w-full">
            <IoLogoFirebase size={40} color="#918614" />
            <SiTypescript size={40} color="#0988af" />
            <FaReact size={40} color="#1fb2e2" />
            <RiTailwindCssFill size={40} color="#075670" />
          </div>
        </li>
        <li
          className={`${isChangedTheme} rounded-md flex flex-col justify-between  items-center p-5 space-y-5`}
        >
          <a
            className="hover:opacity-70"
            href="https://nlw-expert-notes-peach.vercel.app/"
            target="_blank"
          >
            <img
              src={thumbNotas}
              className="rounded-md"
              alt="Primeiro projeto"
            />
          </a>
          <h2 className="text-slate-500 font-bold text-2xl text-center">
            Sistema de notas com gravador
          </h2>
          <div className="flex items-center justify-around w-full">
            <SiTypescript size={40} color="#0988af" />
            <FaReact size={40} color="#1fb2e2" />
            <RiTailwindCssFill size={40} color="#075670" />
          </div>
        </li>
        <li
          className={`${isChangedTheme} rounded-md flex flex-col items-center justify-between  p-5 space-y-5`}
        >
          <a
            className="hover:opacity-70"
            href="https://picker-photo-color.vercel.app/"
            target="_blank"
          >
            <img
              src={thumbPhotoPickerColor}
              className="rounded-md"
              alt="Primeiro projeto"
            />
          </a>
          <h2 className="text-slate-500 font-bold text-2xl text-center">
            Conta gotas de fotos
          </h2>
          <div className="flex items-center justify-around w-full">
            <IoLogoJavascript size={40} color="#ddda0a" />
            <FaReact size={40} color="#1fb2e2" />
            <RiTailwindCssFill size={40} color="#075670" />
          </div>
        </li>
        <li
          className={`${isChangedTheme} rounded-md flex flex-col items-center justify-between  p-5 space-y-5`}
        >
          <a
            className="hover:opacity-70"
            href="https://calculadora-imc-pi-eight.vercel.app/"
            target="_blank"
          >
            <img src={thumbImc} className="rounded-md" alt="Primeiro projeto" />
          </a>
          <h2 className="text-slate-500 font-bold text-2xl text-center">
            Calculadora de IMC
          </h2>
          <div className="flex items-center justify-around w-full">
            <IoLogoJavascript size={40} color="#ddda0a" />
            <FaReact size={40} color="#1fb2e2" />
            <FaCss3 size={40} color="#1fb2e2" />
          </div>
        </li>
        <li
          className={`${isChangedTheme} rounded-md flex flex-col items-center justify-between  p-5 space-y-5`}
        >
          <a
            className="hover:opacity-70"
            href="https://rest-coutries-ebon.vercel.app/"
            target="_blank"
          >
            <img
              src={thumbCountries}
              className="rounded-md object-cover"
              alt="Primeiro projeto"
            />
          </a>
          <h2 className="text-slate-500 font-bold text-2xl text-center">
            Rest Countries
          </h2>
          <div className="flex items-center justify-around w-full">
            <IoLogoJavascript size={40} color="#ddda0a" />
            <FaReact size={40} color="#1fb2e2" />
            <RiTailwindCssFill size={40} color="#075670" />
          </div>
        </li>
        <li
          className={`${isChangedTheme} rounded-md flex flex-col items-center justify-between  p-5 space-y-5`}
        >
          <a
            className="hover:opacity-70"
            href="https://arcodeon.vercel.app/"
            target="_blank"
          >
            <img
              src={thumbArcodeon}
              className="rounded-md object-cover"
              alt="Primeiro projeto"
            />
          </a>
          <h2 className="text-slate-500 font-bold text-2xl text-center">
            Arcodeon
          </h2>
          <div className="flex items-center justify-around w-full">
            <IoLogoJavascript size={40} color="#ddda0a" />
            <FaReact size={40} color="#1fb2e2" />
            <RiTailwindCssFill size={40} color="#075670" />
          </div>
        </li>
      </ul>
    </Container>
  );
}
