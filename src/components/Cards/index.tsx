import { useTheme } from "../../Contexts/ThemeContext";
import ListOfLanguagens from "../ListsLanguagens";
import TitleCard from "../TitleCard";
import ProjectKanban from "../../../public/projectKanban.png";
import ProjectWebCar from "../../../public/projectWebCar.png";
import { Link } from "react-router-dom";

export default function Card() {
  const { theme } = useTheme();
  const isChangedTheme = theme === "light" ? "bg-white" : "bg-slate-900";
  return (
    <>
      <li className={`${isChangedTheme} rounded-md p-5 space-y-5`}>
        <TitleCard>Experiência:</TitleCard>
        <div className="flex items-center gap-8">
          <span className="text-slate-500">2022 - 2022</span>
          <div>
            <h2 className="font-bold text-slate-500">
              Copyservice Cópias e impressões
            </h2>
            <p className="text-slate-500">Atendente</p>
          </div>
        </div>
        <div className="flex items-center  gap-8">
          <span className="text-slate-500">2020 - 2021</span>
          <div>
            <h2 className="font-bold text-slate-500">
              Hiper Export Terminais{" "}
            </h2>
            <p className="text-slate-500">Assistente administrativo</p>
          </div>
        </div>
        <div className="flex items-center  gap-8">
          <span className="text-slate-500">2024 - 2024</span>
          <div>
            <h2 className="font-bold text-slate-500">Fármacia Pague Menos </h2>
            <p className="text-slate-500">Auxiliar de Loja</p>
          </div>
        </div>
        <div className="flex items-center  gap-8">
          <span className="text-slate-500">2024 - Atual</span>
          <div>
            <h2 className="font-bold text-slate-500">Findes </h2>
            <p className="text-slate-500">Instrutor</p>
          </div>
        </div>
      </li>
      <li
        className={`${
          theme === "light" ? "bg-white" : "bg-slate-900"
        } rounded-md p-5 space-y-5 row-span-2`}
      >
        <header>
          <TitleCard>Projetos:</TitleCard>
          <Link to={"/projects"} className="underline text-slate-500">
            Ver mais projetos
          </Link>
        </header>
        <div className="flex flex-col gap-10 mt-4">
          <div className="space-y-3">
            <a
              target="_blank"
              href="https://kanban-board-topaz-six.vercel.app/"
            >
              <img
                src={ProjectKanban}
                alt="Projeto kanban"
                className="rounded-md hover:opacity-70"
              />
            </a>
            <p className="leading-normal font-normal text-slate-500">
              HTML / CSS / JAVASCRIPT - Projeto com WebApi do Javascript drag
              and drop (arrasta e solta)
            </p>
          </div>
          <div className="space-y-3">
            <a target="_blank" href="https://web-carros-neon.vercel.app/">
              <img
                src={ProjectWebCar}
                alt="Projeto WebCar"
                className="rounded-md hover:opacity-70"
              />
            </a>
            <p className="leading-normal font-normal text-slate-500">
              REACT / TYPESCRIPT / FIREBASE / TAILWIND - Projeto completo com
              cadastro e leitura de dados, baseado no site da web motors
            </p>
          </div>
        </div>
      </li>
      <li
        className={`${
          theme === "light" ? "bg-white" : "bg-slate-900"
        } rounded-md p-5 space-y-5`}
      >
        <TitleCard>Conhecimentos em:</TitleCard>
        <ListOfLanguagens />
      </li>
    </>
  );
}
