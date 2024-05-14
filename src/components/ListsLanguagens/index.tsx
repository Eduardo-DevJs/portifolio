import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { FaCss3, FaHtml5, FaReact } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";

export default function ListOfLanguagens() {
  return (
    <>
      <ul className="grid grid-cols-3 gap-6 mt-5">
        <li className="flex items-center flex-col gap-2">
          <FaHtml5 size={40} color="#f8af10" />
          <p className="font-semibold text-xl text-slate-500">HTML</p>
        </li>
        <li className="flex items-center flex-col gap-2">
          <FaCss3 size={40} color="#0988af" />
          <p className="font-semibold text-xl text-slate-500">CSS</p>
        </li>
        <li className="flex items-center flex-col gap-2">
          <IoLogoJavascript size={40} color="#ddce25" />
          <p className="font-semibold text-xl text-slate-500">JavaScript</p>
        </li>
        <li className="flex items-center flex-col gap-2">
          <FaReact size={40} color="#1fb2e2" />
          <p className="font-semibold text-xl text-slate-500">React</p>
        </li>
        <li className="flex items-center flex-col gap-2">
          <IoLogoFirebase size={40} color="#918614" />
          <p className="font-semibold text-xl text-slate-500">Firebase</p>
        </li>
        <li className="flex items-center flex-col gap-2">
          <SiTypescript size={40} color="#0988af" />
          <p className="font-semibold text-xl text-slate-500">Typescript</p>
        </li>
        <li className="flex items-center flex-col gap-2">
          <RiNextjsFill size={40} color="#000" />
          <p className="font-semibold text-xl text-slate-500">NextJs</p>
        </li>
      </ul>
    </>
  );
}
