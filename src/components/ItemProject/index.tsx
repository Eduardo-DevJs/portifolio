import { ProjectsProps } from "../../types/projectsType";
export default function Project({
  className,
  thumb,
  alt,
  title,
  link,
  languages,
}: ProjectsProps) {
  return (
    <li
      className={`${className} rounded-md flex flex-col justify-around items-center p-5 space-y-5`}
    >
      <a className="hover:opacity-70" href={link} target="_blank">
        <img src={thumb} className="rounded-md" alt={alt} />
      </a>
      <h2 className="text-slate-500 font-bold text-2xl text-center">{title}</h2>
      <div className="flex items-center gap-10 justify-center w-full">
        {languages}
      </div>
      <a
        href={link}
        target="_blank"
        className="bg-sky-600 hover:bg-sky-500 transition-colors p-2 text-xl rounded-md w-full text-center text-white font-bold"
      >
        Acessar
      </a>
    </li>
  );
}
