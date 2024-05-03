import { FaRegCopy, FaWhatsapp } from "react-icons/fa";
import { FiFacebook, FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../../Contexts/ThemeContext";

export default function CardProfile() {
  const { theme } = useTheme();

  async function handleCopyEmail() {
    try {
      await navigator.clipboard.writeText("dudev2001@gmail.com");
      alert("Email copiado para área de tranferência");
    } catch (error) {
      console.log(`Erro ao copiar ${error}`);
    }
  }

  const isChangedTheme = theme === "light" ? "bg-white" : "bg-slate-900";

  return (
    <aside className={`${isChangedTheme} shadow p-5 rounded`}>
      <div className="space-y-4">
        <div
          className={`${
            theme === "light" ? "bg-zinc-200 " : "bg-slate-800"
          } w-full h-[260px] rounded`}
        ></div>
        <h1 className="font-bold text-2xl text-slate-500">
          Eduardo de Oliveira 🚀
        </h1>
        <p className="text-slate-500 leading-8 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          aliquam illum expedita quas sint! Reprehenderit, quae! Alias, ipsa.
          Odio mollitia odit doloribus cupiditate dolorum, in qui neque
          exercitationem debitis repudiandae?
        </p>
        <div className="flex items-center gap-2">
          <button className="p-4 flex items-center gap-4 bg-green-600 rounded font-bold text-white">
            <FaWhatsapp size={24} />
            <span>WhatsApp</span>
          </button>
          <button
            onClick={handleCopyEmail}
            className="p-4 flex items-center gap-4  bg-sky-600 rounded font-bold text-white"
          >
            <FaRegCopy size={24} />
            <span>Copiar Email</span>
          </button>
        </div>

        <div className="flex items-center gap-5">
          <a
            href="#"
            className="border border-gray-40 p-2 rounded text-slate-500 hover:text-sky-500"
          >
            <FiFacebook size={24} />
          </a>
          <a
            href="#"
            className="border border-gray-40 p-2 rounded text-slate-500 hover:text-sky-500"
          >
            <FiLinkedin size={24} />
          </a>
          <a
            href="#"
            className="border border-gray-40 p-2 rounded text-slate-500 hover:text-sky-500"
          >
            <FiGithub size={24} />
          </a>
        </div>
      </div>
    </aside>
  );
}
